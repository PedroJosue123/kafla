from kafka import KafkaProducer
import time

producer = KafkaProducer(bootstrap_servers='kafka:9092')

while True:
    producer.send('my_topic', b'Hola mundo de, Kafka!')
    print("Mensaje enviado")
    time.sleep(5)  # Espera 5 segundos entre mensajes
