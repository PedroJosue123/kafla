const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('Productor listo para enviar mensajes');
});

producer.on('error', (err) => {
  console.error('Error en el productor', err);
});

const sendMessage = (message) => {
  const payloads = [
    { topic: 'test', messages: message }
  ];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Error enviando mensaje:', err);
    } else {
      console.log('Mensaje enviado:', data);
    }
  });
};

module.exports = { sendMessage };
