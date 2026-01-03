from flask import request, Blueprint, jsonify
from models.user_model import create_user, find_user_by_google_id
# gets verify_google_token method that helps get the google token
from services.google_auth import verify_google_token

google_auth_bp = Blueprint("google_auth", __name__)


@google_auth_bp.route("/google", methods=["POST"])
def google_login():
    data = request.get_json(silent=True) or {}
    token = data.get("token")

    if not token:
        return jsonify({"message": "Token is required"}), 400

    try:
        google_user = verify_google_token(token)
    except ValueError as exc:
        return jsonify({"message": str(exc)}), 400
    except Exception:
        return jsonify({"message": "Invalid Google token"}), 401

    user = find_user_by_google_id(google_user.get("sub"))
    if not user:
        create_user({
            "email": google_user.get("email"),
            "google_id": google_user.get("sub"),
        })

    return jsonify({"message": "Logged in via Google"}), 200

