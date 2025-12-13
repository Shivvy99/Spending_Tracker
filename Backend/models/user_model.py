# used to connect backend to app 
from db import db

def create_user(data):
    return db.users.insert_one(data)

def find_user_by_email(email):
    return db.users.find_one({"email": email})

def find_user_by_google_id(google_id):
    return db.users.find_one({"google_id": google_id})
