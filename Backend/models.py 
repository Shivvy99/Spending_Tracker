from pymongo import MongoClient
from config import MONGO_URI

client = MongoClient(MONGO_URI)
db = client.finance_tracker

users = db.users
transactions = db.transactions