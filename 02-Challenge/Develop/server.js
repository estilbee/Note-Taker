const express = require ('express');
const path = require('path');
const fs = require('fs');
let data = require('./db/db.json');


const app = express();
const PORT = 5001;


app.use(express.static('public'));
// body parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

    let noteModel = {
      title: req.body.title,
      id: Math.random(),
      text: req.body.text,
    }

    data.push(noteModel);

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);

  })

  app.delete('/api/notes/:id', (req, res) => {
    // creating an array of notes that we want to keep- if the note id doesn't match the id of the one we want to delete then it gets pushed to the note array
    let noteArray = [];
    for (var i = 0; i < data.length; i ++){
      if (data[i].id != req.params.id ) {
        noteArray.push(data[i])
      }
    }
    data = noteArray

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  
  })



  app.listen(PORT, () =>
  console.log(`App is listening at http://localhost:${PORT}`)
);