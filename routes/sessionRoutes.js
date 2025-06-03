const express = require('express');
const router = express.Router();
const {
  createSession,
  getTutorSessions,
  updateSessionStatus
} = require('../controllers/sessionController');

// POST /api/sessions/
router.post('/', createSession);

// GET /api/sessions/tutor/:tutorId
router.get('/tutor/:tutorId', getTutorSessions);

// PUT /api/sessions/:sessionId
router.put('/:sessionId', updateSessionStatus);

module.exports = router;
