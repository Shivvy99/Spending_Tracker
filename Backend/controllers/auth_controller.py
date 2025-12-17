# sign up features and hashed password

from werkzeug.security import generate_password_hash, check_password_hash
from models.user_model import create_user, find_user_by_email
from flask import Blueprint, request, jsonify, Flask
from config import JWT_SECRET
import datetime, jwt
from services.middleware import token_required

# blue print to add to main flask app using regiser.blueprint
auth = Blueprint("auth", __name__)

# http route that gets user and password info, returning a generated user
@auth.route("/signup", methods = ["POST"])
def signup():
    # get from front end
    data = request.json
    
    # Validate data exists
    if not data:
        return jsonify({"message": "Request body is required"}), 400
    
    # Check required fields
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400
    
    # Validate email format (simple check)
    email = email.strip()
    if len(email) < 5 or "@" not in email:
        return jsonify({"message": "Invalid email format"}), 400
    
    # Validate password length
    if len(password) < 6:
        return jsonify({"message": "Password must be at least 6 characters"}), 400

    # Check if user already exists
    if find_user_by_email(email):
        return jsonify({"message": "User already exists"}), 409
    
    # Hash password and create user
    hashed_pw = generate_password_hash(password)
    create_user({
        "email": email,
        "password": hashed_pw
    })

    return jsonify({"message": "User created successfully"}), 201

# allows the user to log in
@auth.route("/login", methods=["POST"])
def login():
    data = request.json
    
    # Validate data exists
    if not data:
        return jsonify({"message": "Request body is required"}), 400
    
    # Check required fields
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400
    
    # Look up user by email
    email = email.strip()
    user = find_user_by_email(email)

    # Check if user exists and password is correct
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"message": "Invalid credentials"}), 401
    
    # Generate JWT token
    token = jwt.encode({
        "user_id": str(user["_id"]),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }, JWT_SECRET, algorithm="HS256")
    
    return jsonify({"message": "Logged in successfully", "token": token}), 200

