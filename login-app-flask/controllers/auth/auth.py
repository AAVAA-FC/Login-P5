from flask import Blueprint, request, jsonify
from db.alchemyClasses.Seller import Seller
from model.seller_model import *

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = get_seller_by_email(email)
    if not user:
        return 'Correo inválido.', 401

    if not user.check_password(password):
        return 'Contraseña inválida.', 401

    return 'Inicio de sesión exitoso', 200
