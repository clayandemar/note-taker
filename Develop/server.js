const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const PORT = 3001;
const app = express();
var notes = JSON.parse(data);

//Parses JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Route to Home Page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Route to Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

//Message showing that localhost is running 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//Save notes written

//Route specific notes
app.post('/api/notes', function(req, res){
  let newNote = req.body;
  notes.push(newNote);
  updateDb();
  return console.log("Added new note: "+newNote.title);
});

//Route Specific ID for note
app.get("/api/notes/:id", function(req,res) {
  res.json(notes[req.params.id]);
});




