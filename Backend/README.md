# Backend API

Flask + Mongo backend for Spending Tracker with Plaid banking connectivity.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Configure environment (`.env`):
   ```dotenv
   MONGO_URI=mongodb+srv://...
   JWT_SECRET=change-me
   PLAID_CLIENT_ID=your_plaid_client_id
   PLAID_SECRET=your_plaid_secret
   PLAID_ENV=sandbox  # or development/production
   GOOGLE_CLIENT_ID=your_google_client_id
   ```
3. Run the server:
   ```bash
   python app.py
   ```

## Plaid endpoints (all require `Authorization: Bearer <jwt>`)

- `POST /plaid/link-token`
  - Body: `{}`
  - Response: `{ "link_token": "..." }`
- `POST /plaid/exchange-public-token`
  - Body: `{ "public_token": "public-sandbox-..." }`
  - Saves the access token to the current user; returns `{ "item_id": "...", "access_token_saved": true }`.
- `GET /plaid/accounts`
  - Returns `{ "accounts": [...] }` for the saved access token.
- `GET /plaid/transactions?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD`
  - Defaults to last 30 days if dates are omitted; returns Plaid transactions payload.

## Auth recap

- Sign up: `POST /auth/signup` with `{ "email", "password" }`.
- Login: `POST /auth/login` with `{ "email", "password" }` -> returns JWT for Plaid routes.
- Google login: `POST /auth/google` with `{ "token" }` from Google ID token.

## Quick smoke tests (sandbox)

Use a JWT from `/auth/login` and a sandbox public token from the Plaid docs (`public-sandbox-...`).

```bash
# 1) Create link token
curl -X POST http://localhost:5000/plaid/link-token \
  -H "Authorization: Bearer <JWT>"

# 2) Exchange public token (replace with real token from Plaid Link)
curl -X POST http://localhost:5000/plaid/exchange-public-token \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{"public_token": "public-sandbox-..."}'

# 3) Fetch accounts
curl -X GET http://localhost:5000/plaid/accounts \
  -H "Authorization: Bearer <JWT>"

# 4) Fetch transactions (last 30 days by default)
curl -X GET "http://localhost:5000/plaid/transactions" \
  -H "Authorization: Bearer <JWT>"
```
