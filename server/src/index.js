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
            var movieNames = data.map((x) => x.name)
            res.json(movieNames)
        })
})

app.post('/movies', (req, res) => {
    knex('movie_details')
        .insert(req.body)
        .returning(Object.keys(req.body))
        .then(data => res.status(200).json(data))
})

app.patch('/movies/:id', (req, res) => {
    let movieId = parseInt(req.params.id)
    // console.log(orderId);
    knex('movie_details')
      .where({ id: movieId })
      .update(req.body, Object.keys(req.body))
      .then(data => {
        res.status(200).json(data) //send data over if success
      })
  })

  app.delete('/movies/:id', (req, res) => {
    let movieId = parseInt(req.params.id)
    knex('movie_details')
        .where('id', '=', movieId)
        .del()
        .then(data => {
            res.status(200).json(`Number of records deleted: ${data}`);
        })
  })


app.listen(port, () => {
    console.log(`Your Knex and Express apps are running successfully on port ${port} !`)
  })
  
  module.exports = app;