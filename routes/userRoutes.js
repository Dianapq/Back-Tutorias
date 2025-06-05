const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    listTutors, 
    getUserByEmail 
} = require('../controllers/userController');

// Rutas de autenticación
router.post('/register', registerUser);
router.post('/login', loginUser);

// Rutas de búsqueda de usuarios
router.get('/tutors', listTutors);
router.get('/by-email/:email', getUserByEmail);

module.exports = router;
