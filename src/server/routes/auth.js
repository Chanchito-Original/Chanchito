const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Ruta de registro
router.post('/register', registerUser);

// Ruta de login
router.post('/login', loginUser);

module.exports = router;
