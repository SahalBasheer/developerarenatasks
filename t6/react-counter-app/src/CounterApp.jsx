
import React, { useState } from "react";
import "./index.css";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter</h1>
      <p className="counter-value">Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="btn increment">Increment</button>
        <button onClick={() => setCount(count - 1)} className="btn decrement">Decrement</button>
        <button onClick={() => setCount(0)} className="btn reset">Reset</button>
      </div>
    </div>
  );
}
