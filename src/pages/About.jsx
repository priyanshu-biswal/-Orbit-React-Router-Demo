import React from 'react';

export default function About() {
  return (
    <section className="content-page">
      <span className="eyebrow">ABOUT THIS PROJECT</span>
      <h1>Small by design.<br /><span>Useful by nature.</span></h1>
      <p className="lead">Orbit is a compact example of how a few React fundamentals fit together to make a complete application.</p>
      <div className="feature-grid">
        <article className="feature-card"><span className="feature-icon lavender">↗</span><h2>Find your way</h2><p>React Router powers clear page navigation, dynamic profile and order pages, and a friendly not-found screen.</p></article>
        <article className="feature-card"><span className="feature-icon peach">⌘</span><h2>Keep it personal</h2><p>A shared authentication context remembers a local demo session and protects the dashboard route.</p></article>
        <article className="feature-card"><span className="feature-icon mint">＋</span><h2>Learn by trying</h2><p>Explore a tested counter, sign-up flow, and sample order links. No backend setup is required.</p></article>
      </div>
    </section>
  );
}