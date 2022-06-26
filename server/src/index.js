const express = require('express');
const cors = require('cors');       // we may need to uncomment this if we encounter issues relating to cors
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')['development'])

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