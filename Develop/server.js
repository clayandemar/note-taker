const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const PORT = 3001;
const app = express();

var savedNotes = []

//Parses JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Message showing that localhost is running
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
})

//Route to Home Page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

//Route to Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
)

//Save button
app.post('/api/notes', (req, res) => {
  savedNotes.push(req.body);
  updateSavedNotes();
  return true;
}
);

//Update the saved notes function
function updateSavedNotes() {
  fs.writeFile("db/db.json", JSON.stringify(savedNotes, '\t'), err => {
    return true;
  });
}

//Grab saved notes and put them in saved notes section
app.get('/api/notes', (req, res) => {
  fs.readFile("db/db.json", "utf8", (err,data) => {
    savedNotes = JSON.parse(data);
  })
  res.json(savedNotes)
});
