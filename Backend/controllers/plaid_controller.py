from datetime import date, timedelta

from flask import Blueprint, jsonify, request

from services.middleware import token_required
from services import plaid_service
from models.user_model import (
    get_plaid_access_token,
    set_plaid_access_token,
)

plaid_bp = Blueprint("plaid", __name__)


def _require_access_token(user_id: str):
    token = get_plaid_access_token(user_id)
    if not token:
        return None, (jsonify({"message": "No Plaid access token found for user"}), 400)
    return token, None


@plaid_bp.route("/link-token", methods=["POST"])
@token_required
def create_link_token(token):
    user_id = token.get("user_id")
    try:
        link_token = plaid_service.create_link_token(user_id)
        return jsonify({"link_token": link_token}), 200
    except ValueError as exc:
        return jsonify({"message": str(exc)}), 400


@plaid_bp.route("/exchange-public-token", methods=["POST"])
@token_required
def exchange_public_token(token):
    body = request.get_json(silent=True) or {}
    public_token = body.get("public_token")
    if not public_token:
        return jsonify({"message": "public_token is required"}), 400

    try:
        access_token, item_id = plaid_service.exchange_public_token(public_token)
        result = set_plaid_access_token(token.get("user_id"), access_token, item_id)
        if not result:
            return jsonify({"message": "Invalid user id; could not save access token"}), 400
        return jsonify({"item_id": item_id, "access_token_saved": True}), 200
    except ValueError as exc:
        return jsonify({"message": str(exc)}), 400


@plaid_bp.route("/accounts", methods=["GET"])
@token_required
def get_accounts(token):
    access_token, error = _require_access_token(token.get("user_id"))
    if error:
        return error
    try:
        accounts = plaid_service.get_accounts(access_token)
        return jsonify({"accounts": accounts}), 200
    except ValueError as exc:
        return jsonify({"message": str(exc)}), 400


@plaid_bp.route("/transactions", methods=["GET"])
@token_required
def get_transactions(token):
    access_token, error = _require_access_token(token.get("user_id"))
    if error:
        return error

    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    # Default to last 30 days if not provided
    if not start_date or not end_date:
        end_date = date.today().isoformat()
        start_date = (date.today() - timedelta(days=30)).isoformat()

    try:
        transactions = plaid_service.get_transactions(access_token, start_date, end_date)
        return jsonify(transactions), 200
    except ValueError as exc:
        return jsonify({"message": str(exc)}), 400
