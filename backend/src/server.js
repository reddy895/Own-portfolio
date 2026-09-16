const express = require('express');
const cors = require('cors');
require('dotenv').config();

const healthRouter = require('./routes/health');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:8888').split(',');

// Security & CORS Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
    if (!origin || ALLOWED_ORIGINS.includes('*') || ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive default for ease of local/staging deployment
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Basic Request Logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// API Routes
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);

// Root greeting endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Praveen L Kumbalur Portfolio API',
    status: 'ACTIVE',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.originalUrl
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`  PRAVEEN PORTFOLIO BACKEND SERVER READY     `);
    console.log(`  PORT: ${PORT}                              `);
    console.log(`  HEALTH: http://localhost:${PORT}/api/health`);
    console.log(`=============================================`);
  });
}

module.exports = app;
