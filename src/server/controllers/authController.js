const pool = require('../config/db');

// Registro de usuario
const registerUser = async (req, res) => {
  try {
    const { nombre_completo, email, password } = req.body;

    // Hash de la contraseña (usando bcrypt, asegúrate de instalarlo)
    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      'INSERT INTO usuario (nombre_completo, email, password) VALUES ($1, $2, $3) RETURNING *',
      [nombre_completo, email, password]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error de servidor');
  }
};

// Login de usuario
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query('SELECT * FROM usuario WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(401).json('Usuario no encontrado');
    }

    // Comparar contraseñas (usando bcrypt)
    // const passwordMatch = await bcrypt.compare(password, user.rows[0].password);

    // if (!passwordMatch) {
    //   return res.status(401).json('Contraseña incorrecta');
    // }

    res.json('Login exitoso'); // Puedes devolver un token aquí si lo estás usando
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error de servidor');
  }
};

module.exports = { registerUser, loginUser };
