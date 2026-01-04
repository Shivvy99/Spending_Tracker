from flask import Flask

from controllers.auth_controller import auth
from controllers.google_controller import google_auth_bp
from controllers.plaid_controller import plaid_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(google_auth_bp, url_prefix="/auth")
app.register_blueprint(plaid_bp, url_prefix="/plaid")


@app.route("/")
def home():
    return "Backend connected to MongoDB!"

if __name__ == "__main__":
    app.run(debug=True)