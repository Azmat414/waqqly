const express = require('express');
const router = express.Router();
const walkerController = require('../controllers/walker.controller');

router.post('/register', walkerController.registerWalker);

// Add more routes as needed (get, update, delete)

module.exports = router;
