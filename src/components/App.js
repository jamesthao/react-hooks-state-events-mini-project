import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedId, setSelectedId] = useState("All")
  const [Tasks, setTask] = useState(TASKS);
  const handleSelect = (item) => {
    let updatedTask = Tasks.filter(i => i.category === item || item === "All")
    setSelectedIF(() => item) {
    setTask(() => updatedTask)
    }
  }
  const onTaskFormSubmit = (item) => {
    setTask((Tasks) => [...Task, item])
  }
  const onDelete = (id) => {
      const updatedTask =Tasks.filter((_, i) => i !== id)
      setTask(() => updatedTask)
  }  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedId={selectedId} handleSelect={handleSelect} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList selectedId={selectedId} tasks={Tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
