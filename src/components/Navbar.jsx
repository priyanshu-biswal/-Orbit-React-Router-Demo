import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="Orbit home">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>orbit</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          {user && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
            </>
          )}
        </div>
        <div className="nav-account">
        {user ? (
          <>
            <span className="welcome-label">Hi, {user.name}</span>
            <button className="button button-small button-quiet" onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <NavLink className="login-link" to="/login">Log in</NavLink>
            <NavLink className="button button-small" to="/signup">Create account</NavLink>
          </>
        )}
        </div>
      </nav>
    </header>
  );
}