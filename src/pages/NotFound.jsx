import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="content-page not-found">
      <span className="error-code">404</span>
      <h1>This page drifted <span>off course.</span></h1>
      <p className="lead">We couldn't find the page you were looking for.</p>
      <Link className="button" to="/">Back to home <span aria-hidden="true">→</span></Link>
    </section>
  );
}