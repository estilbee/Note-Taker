const express = require ('express');
const path = require('path');
const data = require('../db/db.json');
const notes = require('./notes.html');

const app = express();
const PORT = 5001;


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });


  app.get('/api/notes', (req, res) => {
    res.json(data);
  });

  app.post('/api/notes', (req, res) => {
    //needs to generate a random ID

  })

  app.delete('/api/notes/:id', (req, res) => {
    // res.??
  })



  app.listen(PORT, () =>
  console.log(`App is listening at http://localhost:${PORT}`)
);