import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [item, setItem] = useState({ text: "", category: "" })
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }
  const Category = categories || []
  const onSubmit = (e) => {
    let newel = {
      text: item.text, category: item.category
    }
    e.preventDefault();
    onTaskFormSubmit(newel)
  }
  return (
    <form className="new-task-form"
      onSubmit={onSubmit}
    >
      <label>
        Details
        <input type="text" name="text" value={item.text} onChange={e => handleChange(e)} />
      </label>
      <label>
        Category
        <select name="category" value={item.category} onChange={e => handleChange(e)}>
        {Category.map((item, i) => <option key={i}>
            {item}
          </option>)}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onSubmit} />
    </form>
  );
}

export default NewTaskForm;
