const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./confi/de'); // Corregir la ruta de importación
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500', 'null'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Rutas
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sessions', sessionRoutes); 
app.use("/api", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
