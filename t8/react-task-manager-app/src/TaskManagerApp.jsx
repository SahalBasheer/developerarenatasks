import React from "react";
import { TaskProvider } from "./TaskContext";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";


export function TaskManagerApp() {
  return (
    <TaskProvider>
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
