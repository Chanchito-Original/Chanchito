// auth.js

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { registerUser, loginUser } = require('../controllers/authController');

// Ruta de registro
router.post('/register', async (req, res) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Lógica para registrar un usuario en la base de datos
    const result = await registerUser(req, client);

    // Commit de la transacción
    await client.query('COMMIT');

    // Envía la respuesta al cliente
    res.json({ success: true, message: 'Usuario registrado con éxito', user: result.rows[0] });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error);

    // Envía la respuesta de error al cliente
    res.status(500).json({ success: false, message: 'Error al registrar usuario' });
  } finally {
    // Libera el cliente solo después de completar la respuesta al cliente
    if (client && client.release) {
      client.release();
    }
  }
});

// Ruta de login
router.post('/login', loginUser);
router.get('/login', (req, res) => {
  res.send('Página de inicio de sesión');
});

module.exports = router;
