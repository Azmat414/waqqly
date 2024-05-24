const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.post('/register', petController.registerPet);

// Add more routes as needed (get, update, delete)

module.exports = router;
