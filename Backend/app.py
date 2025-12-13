from flask import Flask
from pymongo import MongoClient
from config import MONGO_URI, SECRET_KEY

app = Flask(__name__)
app.secret_key = SECRET_KEY

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client.spending_tracker
users = db.users
transactions = db.transactions

@app.route("/")
def home():
    return "Backend connected to MongoDB!"

if __name__ == "__main__":
    app.run(debug=True)