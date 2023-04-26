import React, { useEffect, useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);

      // clear form after submission
      setValue("");
    }
  };

  // if (savedData) {
  //   return JSON.parse(savedData)
  // } else {
  //   return []
  // }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add a to-do"
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
