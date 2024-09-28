const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
const consumer = new kafka.Consumer(
  client,
  [{ topic: 'test', partition: 0 }],
  { autoCommit: true }
);

consumer.on('message', (message) => {
  console.log('Mensaje recibido:', message.value);
});

consumer.on('error', (err) => {
  console.error('Error en el consumidor', err);
});
