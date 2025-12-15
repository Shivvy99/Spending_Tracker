from flask import request, Blueprint, jsonify
from models.user_model import create_user, find_user_by_google_id
from services.google_auth import verify_google_token

# blue print to add to main flask app using regiser.blueprint
auth = Blueprint("auth", __name__)

auth.route("/auth/google", methods = ["POST"])
def google_login():
    # get token from json
    token = request.json["token"]
    # call google sdk
    google_user = verify_google_token(token)
    # check if user exists
    user = find_user_by_google_id(google_user["sub"])
    if not user:
        create_user({
            "email": google_user["email"],
            "google_id": google_user["sub"]
        })

    return jsonify({"message": "Logged in"})

