const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');
const fs = require ('fs');
const app = express();

const PORT = process.env.PORT || 3001;

const { notes } = require('./db/notes.json');
const generateUniqueId = require('generate-unique-id');

// Middleware for parsing JSON and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

function newNote(body, )

// GET route for home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    req.body.id = generateUniqueId();
    const note = newNote(req.body, notes);
    res.json(note);
})


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
