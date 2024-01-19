// Registro de usuario
const pool = require('../config/db');

// Registro de usuario
const registerUser = async (req, client) => {
  let transactionError = null;

  try {
    const {
      nombre_completo,
      email,
      password,
      telefono,
      nombre_usuario,
      genero,
      pregunta_seguridad,
      respuesta_seguridad,
    } = req.body;

    const rol_id = 1;

    // Comienza la transacción
    await client.query('BEGIN');

    // Lógica para registrar un usuario en la base de datos
    const newUser = await client.query(
      'INSERT INTO usuario (nombre_completo, email, telefono, password, rol_id, nombre_usuario, genero, pregunta_seguridad, respuesta_seguridad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [nombre_completo, email, telefono, password, rol_id, nombre_usuario, genero, pregunta_seguridad, respuesta_seguridad]
    );

    // Commit de la transacción
    await client.query('COMMIT');

    // Retorna el nuevo usuario
    return newUser;
  } catch (error) {
    // Rollback en caso de error
    await client.query('ROLLBACK');
    console.error(error);
    transactionError = 'Error al registrar usuario';
    throw error; // Re-lanza el error para que se maneje en la ruta
  }
};


// Login de usuario
const loginUser = async (req, res) => {
  try {
    // Lógica de inicio de sesión
    res.json('Login exitoso'); // Puedes devolver un token aquí si lo estás usando
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error de servidor');
  }
};

module.exports = { registerUser, loginUser };
