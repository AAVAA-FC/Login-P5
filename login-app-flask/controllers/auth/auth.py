from flask import Blueprint, request, jsonify
from db.alchemyClasses.Seller import Seller
from db.alchemyClasses.Buyer import Buyer
from model.seller_model import *
from model.buyer_model import *

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password') 

    user = get_seller_by_email(email) or get_buyer_by_email(email)
    if user and user.check_password(password):
         return 'Inicio de sesión exitoso', 200
    else:
        return 'Correo o contraseña inválidos.', 401
