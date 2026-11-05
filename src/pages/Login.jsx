import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = isValidEmail(email) && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Invalid email address format.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError('');
    login(email, password);
    navigate(from, { replace: true });
  };

  return (
    <section className="auth-page">
      <div className="auth-aside">
        <span className="eyebrow">YOUR SPACE AWAITS</span>
        <h1>Good to<br />have you <span>back.</span></h1>
        <p>Pick up right where you left off. Your Orbit is just a moment away.</p>
        <div className="aside-decoration" aria-hidden="true">✦</div>
      </div>
      <div className="auth-card">
        <span className="eyebrow">WELCOME BACK</span>
        <h2>Log in to Orbit</h2>
        <p className="auth-intro">Enter your details to continue.</p>
        {error && <div className="form-error" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" autoComplete="current-password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="button auth-submit" type="submit" disabled={!isFormValid}>Log in <span aria-hidden="true">→</span></button>
        </form>
        <p className="auth-switch">New to Orbit? <Link to="/signup">Create an account</Link></p>
        <p className="demo-notice">Demo only — your session stays in this browser.</p>
      </div>
    </section>
  );
}