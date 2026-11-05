import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = isValidEmail(email) && password.length >= 6 && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    signup(email, password);
    navigate('/dashboard', { replace: true });
  };

  return (
    <section className="auth-page">
      <div className="auth-aside signup-aside">
        <span className="eyebrow">A FRESH START</span>
        <h1>Make a little<br /><span>space</span> for you.</h1>
        <p>Create your account and explore your own corner of Orbit.</p>
        <div className="aside-decoration" aria-hidden="true">✳</div>
      </div>
      <div className="auth-card">
        <span className="eyebrow">JOIN ORBIT</span>
        <h2>Create your account</h2>
        <p className="auth-intro">It only takes a moment to get started.</p>
        {error && <div className="form-error" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="signup-email">Email address</label>
            <input id="signup-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" autoComplete="new-password" placeholder="At least 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor="confirm-password">Confirm password</label>
            <input id="confirm-password" type="password" autoComplete="new-password" placeholder="Enter your password again" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button className="button auth-submit" type="submit" disabled={!isFormValid}>Create account <span aria-hidden="true">→</span></button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
        <p className="demo-notice">Demo only — don't use a real password.</p>
      </div>
    </section>
  );
}