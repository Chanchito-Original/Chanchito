const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Asegúrate de proporcionar la ruta correcta
const { registerUser, loginUser } = require('../controllers/authController');

// Ruta de registro
router.post('/register', async (req, res) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Lógica para registrar un usuario en la base de datos
    await registerUser(req, res, client);

    // Commit de la transacción
    await client.query('COMMIT');

    res.json({ success: true, message: 'Usuario registrado con éxito' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al registrar usuario' });
  } finally {
    client.release();
  }
});

// Ruta de login
router.post('/login', loginUser);
router.get('/login', (req, res) => {
  res.send('Página de inicio de sesión');
});

module.exports = router;
