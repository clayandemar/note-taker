const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const PORT = 3001;
const app = express();

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

// ----
app.post('/api/notes', (req, res) =>
console.log(req)
);







//Message showing that localhost is running 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);