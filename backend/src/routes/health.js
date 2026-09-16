const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Praveen Portfolio Backend API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

module.exports = router;
