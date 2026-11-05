import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ProtectedRoute from '../../routes/ProtectedRoute';

function renderProtectedRoute(user, initialEntry = '/dashboard') {
  return render(
    <AuthContext.Provider value={{ user }}>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <h1>Private dashboard</h1>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<h1>Login page</h1>} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>,
  );
}

describe('ProtectedRoute', () => {
  it('redirects signed-out visitors to login', () => {
    renderProtectedRoute(null);
    expect(screen.getByRole('heading', { name: 'Login page' })).toBeInTheDocument();
  });

  it('renders its content for a signed-in user', () => {
    renderProtectedRoute({ id: 'usr_101', email: 'user@example.com', name: 'user' });
    expect(screen.getByRole('heading', { name: 'Private dashboard' })).toBeInTheDocument();
  });
});