const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed: name must be at least 2 characters.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed: valid email address is required.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed: message must be at least 10 characters.'
      });
    }

    // In a production setup, dispatch via Nodemailer, SendGrid, or save to database
    console.log(`[CONTACT TRANSMISSION RECEIVED]`);
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    console.log(`Message: ${message.trim()}`);
    console.log(`Time: ${new Date().toISOString()}`);

    return res.status(200).json({
      success: true,
      message: 'Transmission received successfully. Thank you for reaching out!'
    });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing contact transmission.'
    });
  }
});

module.exports = router;
