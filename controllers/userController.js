const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Registrar usuario
const registerUser = async (req, res) => {
  try {
    const { email, password, ...otherData } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      ...otherData
    });

    await user.save();

    res.status(201).json({
      _id: user._id,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Iniciar sesión
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.json({
      _id: user._id,
      email: user.email,
      role: user.role,
      name: user.name
    });
    
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};


// Listar tutores (filtrable por materia)
const listTutors = async (req, res) => {
  const { subject } = req.query;

  try {
    const query = subject
      ? {
          role: 'tutor',
          subjects: { $in: [new RegExp(subject, 'i')] }
        }
      : { role: 'tutor' };

    const tutors = await User.find(query);
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener usuario por email
const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  listTutors,
  getUserByEmail
};
