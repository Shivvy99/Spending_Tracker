import jwt
from functools import wraps
from flask import request, jsonify
from config import JWT_SECRET

def token_required(f):
    """
    Decorator to verify JWT token in Authorization header.
    Usage: @token_required on any protected route.
    
    Expected header format: Authorization: Bearer <token>
    
    If valid, passes decoded token data to the route via 'token' parameter.
    If invalid or missing, returns 401 Unauthorized.
    """
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # Extract token from Authorization header
        if "Authorization" in request.headers:
            auth_header = request.headers["Authorization"]
            try:
                # Expected format: "Bearer <token>"
                token = auth_header.split(" ")[1]
            except IndexError:
                return jsonify({"message": "Invalid authorization header format"}), 401
        
        if not token:
            return jsonify({"message": "Token is missing"}), 401
        
        try:
            # Verify and decode the token
            data = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
            kwargs["token"] = data
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token has expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"message": "Invalid token"}), 401
        
        return f(*args, **kwargs)
    
    return decorated
