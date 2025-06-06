const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  date: { type: String, required: true }, // "2025-06-01"
  time: { type: String, required: true }, // "10:00 AM - 11:00 AM"
  status: { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
