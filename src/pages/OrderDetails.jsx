import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { orderId } = useParams();

  return (
    <section className="content-page detail-page">
      <span className="eyebrow">ORDER DETAILS</span>
      <h1>Your order is <span>in good hands.</span></h1>
      <p className="lead">This is a sample order page demonstrating a dynamic route.</p>
      <article className="detail-card">
        <div className="detail-icon">✳</div>
        <div><span className="eyebrow">ORDER REFERENCE</span><h2>{orderId}</h2><p>Thanks for exploring the Orbit demo. This order is sample data and has no real shipping status.</p></div>
        <span className="order-status">Processing</span>
      </article>
    </section>
  );
}