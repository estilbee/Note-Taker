const express = require ('express');
const data = require('../db/db.json');
const notes = require('./notes.html');

const app = express();


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
