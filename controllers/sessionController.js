const Session = require('../models/Session');

// Crear sesión (agendamiento)
const createSession = async (req, res) => {
  try {
    const { tutor, student, subject, date, time } = req.body;
    const session = new Session({ tutor, student, subject, date, time });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener sesiones de un tutor
const getTutorSessions = async (req, res) => {
  const { tutorId } = req.params;
  try {
    const sessions = await Session.find({ tutor: tutorId }).populate('student', 'name email');
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cambiar estado de una sesión (ej: confirmar/cancelar)
const updateSessionStatus = async (req, res) => {
  const { sessionId } = req.params;
  const { status } = req.body;
  try {
    const session = await Session.findByIdAndUpdate(sessionId, { status }, { new: true });
    res.json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createSession, getTutorSessions, updateSessionStatus };
