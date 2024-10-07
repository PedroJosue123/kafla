from kafka import KafkaConsumer

consumer = KafkaConsumer('my_topic', bootstrap_servers='kafka:9092', auto_offset_reset='earliest')

for message in consumer:
    print(f"Mensaje recibido: {message.value.decode('utf-8')}")
