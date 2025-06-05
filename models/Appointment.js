const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  tutor: { type: String, required: true },
  student: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
