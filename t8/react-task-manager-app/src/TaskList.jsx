import React from "react";
import { useTaskContext } from "./TaskContext";

export function TaskList() {
  const { tasks, toggleTask, removeTask } = useTaskContext();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => toggleTask(task.id)}>{task.title}</span>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}