require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const petRoutes = require('./routes/pet.routes');
const walkerRoutes = require('./routes/walker.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/pets', petRoutes);
app.use('/api/walkers', walkerRoutes);
app.use('/api', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
