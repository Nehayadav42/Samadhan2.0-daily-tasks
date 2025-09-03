const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/api/students', studentRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/studentdb')

  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("❌ MongoDB connection error:", err));

