# called google sdk for veriifying tokens, need to get google client id eventually
from google.oauth2 import id_token
from google.auth.transport import requests
from config import GOOGLE_CLIENT_ID



def verify_google_token(token: str):
    """Verify a Google ID token and return the decoded payload.

    Raises ValueError on invalid tokens. Caller should handle and respond 401/400.
    """
    if not GOOGLE_CLIENT_ID:
        raise ValueError("Missing GOOGLE_CLIENT_ID configuration")

    if not token:
        raise ValueError("Token is required")

    idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
    # Optionally enforce audience/issuer here if needed.
    return idinfo