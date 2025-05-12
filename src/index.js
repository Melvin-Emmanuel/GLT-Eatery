// src/index.js
const express = require('express');
const app = express();
const connectDB = require('./config/db');
connectDB();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });