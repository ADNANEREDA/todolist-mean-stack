// backend/server.js
require('dotenv').config(); // charge les variables du fichier .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(cors());          
app.use(express.json());  
// Route de test
app.get('/', (req, res) => {
  res.send('API To-Do List opérationnelle');
});

// Routes CRUD des tâches : /tasks
app.use('/tasks', tasksRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connecté à MongoDB');
    app.listen(PORT, () => console.log(`Serveur sur http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Erreur MongoDB :', err.message);
  });