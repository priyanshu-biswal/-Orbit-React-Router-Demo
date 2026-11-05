import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { userId } = useParams();

  return (
    <section className="content-page profile-page">
      <span className="eyebrow">PROFILE</span>
      <div className="profile-card">
        <div className="profile-avatar">{userId?.slice(-1).toUpperCase() || 'O'}</div>
        <div><h1>A little about this profile</h1><p className="lead">Profile ID <strong>{userId}</strong></p></div>
      </div>
      <p className="muted-copy">This public route is an example of reading a user ID from the URL.</p>
    </section>
  );
}