import React, { useState } from 'react';

export default function Counter({ initialCount = 0, min = 0, max = 10 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < max) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > min) setCount((prev) => prev - 1);
  };

  return (
    <section className="content-page counter-page">
      <span className="eyebrow">A LITTLE INTERACTION</span>
      <h1>One step at a <span>time.</span></h1>
      <p className="lead">A simple counter with minimum and maximum boundaries.</p>
      <div className="counter-card">
        <span className="counter-label">CURRENT COUNT</span>
        <strong className="count-value" data-testid="count-value" aria-live="polite">{count}</strong>
        <div className="counter-controls">
          <button className="button button-quiet" onClick={decrement} disabled={count <= min} aria-label="Decrement count">Decrement</button>
          <button className="button" onClick={increment} disabled={count >= max} aria-label="Increment count">Increment</button>
        </div>
        <small>From {min} to {max}</small>
      </div>
    </section>
  );
}