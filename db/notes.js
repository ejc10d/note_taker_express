const fs = require('fs');
const path = require('path');

function makeNewNote(body, notesArray) {
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "./db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
};

module.exports = makeNewNote;