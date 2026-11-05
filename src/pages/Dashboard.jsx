import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="content-page dashboard-page">
      <div className="dashboard-heading">
        <div><span className="eyebrow">YOUR ORBIT</span><h1>Welcome back, {user?.name} <span>✦</span></h1><p className="lead">Here's a little snapshot of your space.</p></div>
        <span className="secure-badge"><span className="status-dot" /> Private dashboard</span>
      </div>
      <div className="stats-grid">
        <article className="stat-card"><span className="stat-icon lavender">◷</span><span className="stat-label">Active orders</span><strong>02</strong><small>Everything is on track</small></article>
        <article className="stat-card"><span className="stat-icon peach">✦</span><span className="stat-label">Your activity</span><strong>76%</strong><small>You're making great progress</small></article>
        <article className="stat-card"><span className="stat-icon mint">♡</span><span className="stat-label">Account status</span><strong>All good</strong><small>Signed in as {user?.email}</small></article>
      </div>
      <div className="section-heading"><div><span className="eyebrow">RECENT ACTIVITY</span><h2>Your orders</h2></div><span className="muted-copy">Sample links for this demo</span></div>
      <div className="order-list">
        <Link className="order-row" to="/order/ord_9901"><span className="order-icon">✳</span><span className="order-description"><strong>Everyday essentials</strong><small>Order #ord_9901 · Placed recently</small></span><span className="order-status">In transit</span><span className="order-arrow">→</span></Link>
        <Link className="order-row" to="/order/ord_9902"><span className="order-icon peach">✧</span><span className="order-description"><strong>Little things, nicely made</strong><small>Order #ord_9902 · Placed recently</small></span><span className="order-status status-delivered">Delivered</span><span className="order-arrow">→</span></Link>
      </div>
    </section>
  );
}