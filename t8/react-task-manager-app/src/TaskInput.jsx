import React, { useState } from "react";
import { useTaskContext } from "./TaskContext";

export function TaskInput() {
  const [input, setInput] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}