from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Formulario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    numero_consulta = db.Column(db.String(20), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    motivo_contacto = db.Column(db.String(50), nullable=False)
    serv_utilizado = db.Column(db.String(50), nullable=False)
    ubicacion = db.Column(db.String(50), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)
    newsletter = db.Column(db.String(10), nullable=True)
    enviado = db.Column(db.DateTime, default=datetime.utcnow)