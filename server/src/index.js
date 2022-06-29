const express = require('express');
const cors = require('cors');       // we may need to uncomment this if we encounter issues relating to cors
var bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const knex = require('knex')(config)


app.use(cors());
app.options('*', cors());

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("App up and running")
})

app.get('/movies', (req, res) => {
    knex('movie_details')
        .select('*')
        .then(data => {
            res.json(data)
        })
})

app.post('/movies', (req, res) => {

    knex('movie_details')
        .insert(req.body)
        .returning(Object.keys(req.body))
        .then(data => res.status(200).json(data))
})

app.post('/signup', function (req, res) {
    console.log(req.body)
    bcrypt.hash(req.body.passwordsignup, saltRounds, function (err,   hash) {
    knex('movie_users').insert({
        name: req.body.usernamesignup,
        email: req.body.emailsignup,
        password: hash
     }).then(function(data) {
      if (data) {
        res.status(200)
        res.redirect('/');
      }
      else{
        res.status(404)
      }
    });
   });
})

app.post('/login', function (req, res) {
    knex('movie_users')
    .where({email: req.body.email})
    .select('*')
    .then(user =>  {
        user = user[0]
        
        if (user ===  undefined) {
            res.status(400).send('Cannot find user')
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then (function(result) {
                    if(result){
                        res.status(200).send("successful login!")
                    }
                    else{
                        res.status(404).send("cannot login user")
                    }
                })
        }
    });
});
  

app.patch('/movies/:name', (req, res) => {
    let movieName = req.params.name
    // console.log(orderId);
    knex('movie_details')
      .where({ name: movieName })
      .update(req.body, Object.keys(req.body))
      .then(data => {
        res.status(200).json(data) //send data over if success
      })
  })

  app.delete('/movies/:name', (req, res) => {
    let movieName = req.params.name
    
    knex('movie_details')
        .where('name', '=', movieName)
        .del()
        .then(data => {
            res.status(200).json(`Number of records deleted: ${data}`);
        })
  })


app.listen(port, () => {
    console.log(`Your Knex and Express apps are running successfully on port ${port} !`)
  })
  
  module.exports = app;