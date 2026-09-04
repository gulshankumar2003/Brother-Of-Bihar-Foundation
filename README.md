# NGO Website (MERN Stack)

A full-stack NGO website built with **MongoDB**, **Express**, **React**, and **Node.js**. It includes five main pages: Home, About, Blog, Donation, and Our Work.

## Features

- **Home** — Hero section, impact stats, focus areas, and call-to-action
- **About** — Organization story, values, and team profiles
- **Blog** — Dynamic blog posts fetched from MongoDB
- **Donation** — Donation form with preset amounts and stats tracking
- **Our Work** — Project listings with status filters (ongoing, completed, planned)

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18, React Router, Vite, Axios |
| Backend  | Node.js, Express                    |
| Database | MongoDB with Mongoose               |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, or a MongoDB Atlas connection string

## Getting Started

### 1. Install dependencies

```bash
cd ngo-website
npm run install:all
```

### 2. Configure environment

Copy the example env file and adjust if needed:

```bash
copy server\.env.example server\.env
```

Default MongoDB URI: `mongodb://127.0.0.1:27017/ngo-website`

### 3. Seed the database

Start MongoDB, then run:

```bash
npm run seed --prefix server
```

This loads sample blog posts and projects.

### 4. Run in development

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### 5. Production build

```bash
npm run build
set NODE_ENV=production
npm start
```

The Express server serves the built React app from `client/dist`.

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/health`         | Health check             |
| GET    | `/api/blog`           | List all blog posts      |
| GET    | `/api/blog/:slug`     | Get single blog post     |
| GET    | `/api/projects`       | List all projects        |
| GET    | `/api/donations/stats`| Donation statistics      |
| POST   | `/api/donations`      | Submit a donation        |

## Project Structure

```
ngo-website/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── pages/   # Home, About, Blog, Donation, Work
│       ├── components/
│       └── api/
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   └── seed/
└── package.json     # Root scripts (concurrently)
```

## Customization

- Update organization name, colors, and content in the React pages and CSS variables (`client/src/index.css`)
- Add real payment integration (Stripe, PayPal) to the donation form
- Replace sample seed data in `server/seed/seed.js` with your own content

## License

MIT
