const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());
// Rutas de autenticación
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
