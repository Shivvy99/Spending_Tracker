import { createContext, useState, useCallback, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Restore token from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('auth_token');
    if (stored) setToken(stored);
  }, []);

  const signup = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Signup failed');
      }
      return await res.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Login failed');
      }
      const data = await res.json();
      setToken(data.token);
      setUser({ email });
      localStorage.setItem('auth_token', data.token);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const googleLogin = useCallback(async (googleToken) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: googleToken }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Google login failed');
      }
      const data = await res.json();
      setToken(data.token);
      setUser({ email: data.email });
      localStorage.setItem('auth_token', data.token);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    setError(null);
    localStorage.removeItem('auth_token');
  }, []);

  const value = {
    token,
    user,
    loading,
    error,
    login,
    signup,
    googleLogin,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
