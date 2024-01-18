const express = require('express');
const app = express();
const port = 4000; // Puedes cambiar el puerto según tus necesidades

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
