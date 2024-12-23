import React, { useState } from "react";
import { IAddTaskProps } from "../model";

const AddTask: React.FC<IAddTaskProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTask;
