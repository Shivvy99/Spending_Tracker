"""Plaid service helpers for link token creation, token exchange, accounts, and transactions."""

import datetime
from typing import Dict, List, Tuple

from plaid import ApiClient, Configuration, Environment
from plaid.api import plaid_api
from plaid.api_client import ApiException
from plaid.model import (
	AccountsGetRequest,
	CountryCode,
	ItemPublicTokenExchangeRequest,
	LinkTokenCreateRequest,
	LinkTokenCreateRequestUser,
	PlaidError,
	Products,
	TransactionsGetRequest,
	TransactionsGetRequestOptions,
)

from config import PLAID_CLIENT_ID, PLAID_ENV, PLAID_SECRET

_client: plaid_api.PlaidApi | None = None


def _get_environment():
	env = (PLAID_ENV or "sandbox").lower()
	return {
		"sandbox": Environment.Sandbox,
		"development": Environment.Development,
		"production": Environment.Production,
	}.get(env, Environment.Sandbox)


def _get_client() -> plaid_api.PlaidApi:
	global _client
	if _client:
		return _client

	if not PLAID_CLIENT_ID or not PLAID_SECRET:
		raise ValueError("PLAID_CLIENT_ID and PLAID_SECRET must be set in the environment")

	configuration = Configuration(
		host=_get_environment(),
		api_key={"clientId": PLAID_CLIENT_ID, "secret": PLAID_SECRET},
	)
	api_client = ApiClient(configuration)
	_client = plaid_api.PlaidApi(api_client)
	return _client


def create_link_token(user_id: str) -> str:
	"""Create a Link token for the given user."""
	client = _get_client()
	request = LinkTokenCreateRequest(
		products=[Products("transactions")],
		client_name="Spending Tracker",
		country_codes=[CountryCode("US")],
		language="en",
		user=LinkTokenCreateRequestUser(client_user_id=str(user_id)),
	)
	try:
		response = client.link_token_create(request)
		return response.link_token
	except ApiException as exc:
		raise _format_plaid_error(exc)


def exchange_public_token(public_token: str) -> Tuple[str, str]:
	"""Exchange a public token for an access token and item id."""
	client = _get_client()
	try:
		response = client.item_public_token_exchange(
			ItemPublicTokenExchangeRequest(public_token=public_token)
		)
		return response.access_token, response.item_id
	except ApiException as exc:
		raise _format_plaid_error(exc)


def get_accounts(access_token: str) -> List[Dict]:
	client = _get_client()
	try:
		response = client.accounts_get(AccountsGetRequest(access_token=access_token))
		return response.to_dict().get("accounts", [])
	except ApiException as exc:
		raise _format_plaid_error(exc)


def get_transactions(access_token: str, start_date: str | None = None, end_date: str | None = None) -> Dict:
	client = _get_client()
	start = start_date or (datetime.date.today() - datetime.timedelta(days=30)).isoformat()
	end = end_date or datetime.date.today().isoformat()
	request = TransactionsGetRequest(
		access_token=access_token,
		start_date=start,
		end_date=end,
		options=TransactionsGetRequestOptions(count=100, offset=0),
	)
	try:
		response = client.transactions_get(request)
		return response.to_dict()
	except ApiException as exc:
		raise _format_plaid_error(exc)


def _format_plaid_error(exc: ApiException) -> Exception:
	try:
		err = PlaidError.from_dict(exc.body)
		message = f"Plaid error ({err.error_type}): {err.error_message}"
	except Exception:
		message = f"Plaid API error: {exc}"
	return ValueError(message)

