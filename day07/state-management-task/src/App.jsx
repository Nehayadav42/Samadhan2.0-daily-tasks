import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const resetCount = () => setCount(0);


  const handleTextChange = (e) => setText(e.target.value);
  const resetText = () => setText("");

  return (
    <div className="app">
      <h1 className="app-title">Friendly App</h1>

      {}
      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="buttons">
          <button className="btn increment" onClick={increment}>+</button>
          <button className="btn decrement" onClick={decrement}>-</button>
          <button className="btn reset" onClick={resetCount}>Reset</button>
        </div>
      </div>

      {}
      <div className="card">
        <h2>Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type something..."
          className="text-input"
          maxLength={200}
        />
        <div className="preview">
          <p>{text || "Your text will appear here..."}</p>
        </div>
        <button className="btn reset-text" onClick={resetText}>Reset Text</button>
      </div>
    </div>
  );
}

export default App;
