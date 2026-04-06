"""Authentication utilities shared across controllers."""

import datetime
import jwt

from config import JWT_SECRET


def generate_jwt(user_id: str, hours_valid: int = 24) -> str:
	"""Create a signed JWT for the given user id."""
	payload = {
		"user_id": str(user_id),
		"exp": datetime.datetime.utcnow() + datetime.timedelta(hours=hours_valid),
	}
	return jwt.encode(payload, JWT_SECRET, algorithm="HS256")

