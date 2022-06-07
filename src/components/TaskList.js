import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  let data = tasks ? tasks : []
  return (
    <div className="tasks"></div>

    {data.map((item, i) =>
      <Task
        onDelete={() => onDelete(i)}
        key={i} text={item.text} category={item.category}
      />
    )}

    );
  }
  export default TaskList;``