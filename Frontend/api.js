const API_BASE = 'http://localhost:5000';

function getToken() {
  return localStorage.getItem('auth_token');
}

export async function apiFetch(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    // Token expired or invalid, clear it
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }

  return res;
}

export async function getHello() {
  const res = await apiFetch('/');
  return await res.text();
}

