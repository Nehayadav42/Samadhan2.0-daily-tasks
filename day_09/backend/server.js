
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// *** NEW: Add middleware to parse incoming JSON requests ***
app.use(express.json());

// Mock student data
const students = [
  { id: 1, name: 'Alice Johnson', major: 'Computer Science', year: 2025, avatar: 'https://placehold.co/100x100/A8D5BA/333333?text=AJ' },
  { id: 2, name: 'Bob Williams', major: 'Electrical Engineering', year: 2024, avatar: 'https://placehold.co/100x100/FEE4A0/333333?text=BW' },
  { id: 3, name: 'Charlie Brown', major: 'Business Administration', year: 2026, avatar: 'https://placehold.co/100x100/E8A0BF/333333?text=CB' },
  { id: 4, name: 'Diana Miller', major: 'Physics', year: 2025, avatar: 'https://placehold.co/100x100/B2A4FF/333333?text=DM' },
  { id: 5, name: 'Ethan Davis', major: 'Mechanical Engineering', year: 2024, avatar: 'https://placehold.co/100x100/98EECC/333333?text=ED' },
  { id: 6, name: 'Fiona Garcia', major: 'Biology', year: 2027, avatar: 'https://placehold.co/100x100/FFB3B3/333333?text=FG' },
  { id: 7, name: 'George Rodriguez', major: 'History', year: 2026, avatar: 'https://placehold.co/100x100/C1EFFF/333333?text=GR' },
  { id: 8, name: 'Hannah Martinez', major: 'Graphic Design', year: 2025, avatar: 'https://placehold.co/100x100/FDF4F5/333333?text=HM' },
  { id: 9, name: 'Ian Wilson', major: 'Mathematics', year: 2024, avatar: 'https://placehold.co/100x100/DAB88B/333333?text=IW' },
  { id: 10, name: 'Jane Taylor', major: 'English Literature', year: 2027, avatar: 'https://placehold.co/100x100/A0C3D2/333333?text=JT' },
];

// API endpoint to get all students
app.get('/api/students', (req, res) => {
  console.log('GET /api/students - Sending student data');
  res.json(students);
});

// *** NEW: API endpoint to add a new student ***
app.post('/api/students', (req, res) => {
  const { name, major, year } = req.body;
  
  if (!name || !major || !year) {
    return res.status(400).json({ error: 'Name, major, and year are required.' });
  }

  const newStudent = {
    id: students.length + 1, // Simple ID generation
    name,
    major,
    year,
    avatar: `https://placehold.co/100x100/E0E0E0/333333?text=${name.substring(0, 2).toUpperCase()}`,
  };
  
  students.push(newStudent);
  console.log('POST /api/students - Added new student:', newStudent);
  res.status(201).json(newStudent); // Respond with the newly created student
});


app.listen(PORT, () => {
  console.log(`🎓 Backend server is running on http://localhost:${PORT}`);
});
