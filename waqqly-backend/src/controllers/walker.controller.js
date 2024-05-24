const Walker = require('../models/walker.model');

exports.registerWalker = async (req, res) => {
  try {
    console.log('Received walker data:', req.body); // Log received data
    const newWalker = await Walker.create(req.body);
    res.status(201).json(newWalker);
  } catch (error) {
    console.error('Error registering walker:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};

// Add more methods as needed (get, update, delete)