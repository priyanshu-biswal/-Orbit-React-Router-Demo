import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

function getSavedUser() {
  const savedUser = localStorage.getItem('userSession');
  if (!savedUser) return null;

  try {
    const user = JSON.parse(savedUser);
    if (
      user &&
      typeof user.id === 'string' &&
      typeof user.email === 'string' &&
      typeof user.name === 'string'
    ) {
      return user;
    }

    throw new Error('Saved user session has an invalid shape.');
  } catch (error) {
    console.error('Unable to restore the saved user session.', error);
    localStorage.removeItem('userSession');
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  const login = (email) => {
    const userData = { id: 'usr_101', email, name: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('userSession', JSON.stringify(userData));
  };

  const signup = (email) => {
    const userData = { id: `usr_${Date.now()}`, email, name: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('userSession', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userSession');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);