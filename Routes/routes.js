const fs = require('fs');
const path = require('path');




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

});

//Route Specific ID for note
app.get("/api/notes/:id", function(req,res) {
  res.json(notes[req.params.id]);
});
