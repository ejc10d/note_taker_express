const router = require('express').Router();
const generateUniqueId = require('generate-unique-id');
const { notes } = require('../db/db.json');
const { makeNewNote } = require('../db/notes.json')

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = generateUniqueId();
    const newNote = makeNewNote(req.body, notes);
    res.json(newNote);
})

module.exports = router;