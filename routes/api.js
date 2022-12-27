// const router = require('express').Router();
// const generateUniqueId = require('generate-unique-id');
// const { notes } = require('../db/db.json');
// // const { makeNewNote } = require('../lib/notesFunction')
// const fs = require('fs');

// router.get('/notes', (req, res) => {
//     // let results = notes;
//     // res.json(results);
// res.sendFile(path.join(__dirname, "../db/db.json"))
// });

// router.post('/notes', (req, res) => {
//     // req.body.id = generateUniqueId();
//     // const newNote = makeNewNote(req.body, notes);
//     // res.json(newNote);
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const newNotes = req.body;
//     newNotes.id = generateUniqueId();
//     notes.push(newNotes);
//     fs.writeFileSync('../db/db.json', JSON.stringify(notes))
//     res.json(notes);
// })

// module.exports = router;