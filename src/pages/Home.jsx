import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> A tiny app with big possibilities</span>
        <h1>Everything in its <span>right place.</span></h1>
        <p className="hero-description">
          Explore a thoughtfully simple React app with smooth navigation, a personal dashboard, and a little room to play.
        </p>
        <div className="hero-actions">
          <Link className="button" to={user ? '/dashboard' : '/signup'}>
            {user ? 'Go to your dashboard' : 'Get started'} <span aria-hidden="true">→</span>
          </Link>
          <Link className="text-link" to="/about">Take a look around</Link>
        </div>
        <div className="hero-note">
          <span className="avatar-stack" aria-hidden="true"><i>J</i><i>A</i><i>M</i></span>
          <span>A friendly demo for learning React Router</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Illustration of the Orbit dashboard">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="art-sparkle sparkle-one">✦</div>
        <div className="art-sparkle sparkle-two">✳</div>
        <div className="dashboard-preview">
          <div className="preview-topline"><span /><span /><span /><b>OVERVIEW</b><i>•••</i></div>
          <div className="preview-greeting">Your space, <strong>in orbit.</strong></div>
          <div className="preview-chart">
            <div className="chart-label"><span>Activity</span><strong>+24.8%</strong></div>
            <div className="chart-bars" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span></div>
          </div>
          <div className="preview-cards">
            <div><span className="mini-icon lavender">✳</span><small>Projects</small><strong>08</strong></div>
            <div><span className="mini-icon peach">↗</span><small>Progress</small><strong>76%</strong></div>
          </div>
        </div>
        <div className="floating-card"><span>✦</span><div><strong>You're all set</strong><small>Looking good today</small></div><b>✓</b></div>
      </div>
    </section>
  );
}