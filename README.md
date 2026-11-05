# Orbit — React Router Demo

A small, responsive React application demonstrating client-side routing, protected pages, a local demo authentication context, and a bounded counter.

## Requirements

- Node.js 18 or newer
- npm

## Getting started

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Create an account with an email address and a password of at least six characters, or use the login form to create a demo session.

## Available commands

- `npm run dev` — start the development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build
- `npm test` — run the test suite once
- `npm run test:watch` — run tests in watch mode

## Routes

- `/` — home
- `/about` — project overview
- `/counter` — bounded counter
- `/login` and `/signup` — demo authentication
- `/dashboard` — protected dashboard
- `/profile/:userId` — profile route example
- `/order/:orderId` — order route example

Authentication is intentionally client-side and stored in browser local storage for demonstration purposes. It does not validate credentials against a server and must not be used to protect real data.
