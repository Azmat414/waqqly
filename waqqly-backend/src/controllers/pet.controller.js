const Pet = require('../models/pet.model');

exports.registerPet = async (req, res) => {
  try {
    console.log('Received pet data:', req.body); // Log received data
    const newPet = await Pet.create(req.body);
    res.status(201).json(newPet);
  } catch (error) {
    console.error('Error registering pet:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
};

// Add more methods as needed (get, update, delete)