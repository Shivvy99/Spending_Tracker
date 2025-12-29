from flask import Flask
from controllers.auth_controller import auth

app = Flask(__name__)

# Register blueprints
app.register_blueprint(auth, url_prefix="/auth")


@app.route("/")
def home():
    return "Backend connected to MongoDB!"

if __name__ == "__main__":
    app.run(debug=True)