const express = require('express');
const api = require('./routes/api');
const html = require('./routes/html')
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded as well as accessing the "public" file.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
