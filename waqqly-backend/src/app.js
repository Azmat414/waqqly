const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const petRoutes = require('./routes/pet.routes');
const walkerRoutes = require('./routes/walker.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/pets', petRoutes);
app.use('/api/walkers', walkerRoutes);

// Add more routes as needed

module.exports = app;
