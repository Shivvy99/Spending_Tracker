# sign up features and hashed password

from werkzeug.security import generate_password_hash, check_password_hash
from models.user_model import create_user
from flask import Blueprint, request, jsonify
# blue print to add to main flask app using regiser.blueprint
auth = Blueprint("auth", __name__)
# http route i'll that gets user and password info, returning a generated user
@auth.route("/signup", method = ["POST"])
def signup():
    # get from front end
    data = request.json
    if find_user_by_email(data["email"]):
        return jsonify({"message": "User already exists"})
    hashed_pw = generate_password_hash(data["password"])
    # called from models.user_model
    create_user({
        "email": data["email"],
        "password": hashed_pw
    })

    return jsonify({"message": "User created"})