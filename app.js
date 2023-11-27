const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});
app.post('/seleccion', (req, res) => {
  const opcionSeleccionada = req.body.opcion;
  res.send(`Has seleccionado la opción: ${opcionSeleccionada}`);
});
