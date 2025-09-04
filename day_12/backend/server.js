// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn React + API", done: false },
  { id: 2, task: "Build Full-Stack App", done: false }
];

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// ADD todo
app.post("/api/todos", (req, res) => {
  const { task } = req.body;
  const newTodo = { id: Date.now(), task, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Deleted successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
