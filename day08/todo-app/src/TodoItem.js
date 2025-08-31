import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="task-text" onClick={() => onToggle(todo.id)}>
        <span>{todo.text}</span>
        <small className="date">🕒 {todo.date}</small>
      </div>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
}

export default TodoItem;

