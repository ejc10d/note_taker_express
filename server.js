const express = require('express');
const fs = require('fs');
const path = require('path');
const {v4: uuid} =  require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded as well as accessing the "public" file.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Get routes for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Get route for the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// This gets notes and joins it in db.json
app.get('/api/notes', (req, res) => {
res.sendFile(path.join(__dirname, "/db/db.json"))
});

// This posts new notes to the db.json file.
app.post('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid();
  notes.push(newNotes);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes))
  res.json(notes);
})
// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
