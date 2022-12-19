const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');
const fs = require ('fs');
const app = express();

const PORT = process.env.PORT || 3001;

const { notes } = require('./db/notes.json');
const generateUniqueId = require('generate-unique-id');

// Middleware for parsing JSON and urlencoded as well as accessing the "public" file.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// create a new note
function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/notes.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

// ROUTES
// GET route for home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET notes from notes array
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// POST to notes array
app.post('/api/notes', (req, res) => {
    req.body.id = generateUniqueId();
    const note = newNote(req.body, notes);
    res.json(note);
})

// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
