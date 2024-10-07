# Usamos Python como imagen base
FROM python:3.9-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el archivo de requisitos y lo instalamos
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código de la aplicación
COPY app/ .

# Comando por defecto para el productor
CMD ["python", "producer.py"]
