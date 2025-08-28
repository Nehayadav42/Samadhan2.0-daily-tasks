// index.js
const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve frontend

// Sample Data
const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Rahul", marks: 78 },
  { id: 4, name: "Neha", marks: 88 },
];

// API route - fetch all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// API route - add a new student
app.post("/api/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    marks: req.body.marks,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Route to serve frontend at /students
app.get("/students", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start Server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000/students");
});
