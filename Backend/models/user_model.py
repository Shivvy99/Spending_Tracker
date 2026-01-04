from bson import ObjectId

# used to connect backend to app 
from models.db import db

def create_user(data):
    return db.users.insert_one(data)

def find_user_by_email(email):
    return db.users.find_one({"email": email})

def find_user_by_google_id(google_id):
    return db.users.find_one({"google_id": google_id})


def set_plaid_access_token(user_id: str, access_token: str, item_id: str | None = None):
    try:
        user_object_id = ObjectId(user_id)
    except Exception:
        return None

    update = {"plaid_access_token": access_token}
    if item_id:
        update["plaid_item_id"] = item_id
    return db.users.update_one({"_id": user_object_id}, {"$set": update})


def get_plaid_access_token(user_id: str):
    try:
        user_object_id = ObjectId(user_id)
    except Exception:
        return None

    user = db.users.find_one({"_id": user_object_id}, {"plaid_access_token": 1})
    return user.get("plaid_access_token") if user else None

