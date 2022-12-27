const path = require('path');
const router = require('express').Router();

// Get routes for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get route for the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
