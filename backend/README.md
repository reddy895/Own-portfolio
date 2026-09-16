# Praveen L Kumbalur Portfolio - Backend API

Production-ready Node.js / Express backend service for the portfolio.

## Features
- Health check endpoint (`GET /api/health`)
- Contact transmission processing endpoint (`POST /api/contact`)
- Cross-Origin Resource Sharing (CORS) configured for Netlify frontend
- Express JSON body parsing with payload limits
- Production request logging & error handling

## Local Development
```bash
cd backend
npm install
npm run dev
```
The server will start at `http://localhost:5000`.

## Deployment
Can be deployed directly to:
- **Render.com**: Connect this `backend` directory as a Web Service.
- **Railway.app**: Deploy with 1 click.
- **Heroku / VPS**: Standard Node.js process (`npm start`).
