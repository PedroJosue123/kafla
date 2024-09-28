const express = require('express');
const path = require('path');
const { sendMessage } = require('./producer');
require('./consumer');  // Iniciar el consumidor

const app = express();
app.use(express.json());

// Servir archivos estáticos del directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para enviar mensajes a Kafka
app.post('/send', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send('El mensaje no puede estar vacío');
  }

  sendMessage(message);
  res.send(`Mensaje enviado a Kafka: ${message}`);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
