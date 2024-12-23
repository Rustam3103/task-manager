"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskList from "@/features/task/ui/TaskList";
import AddTask from "@/features/task/ui/AddTask";
import { ITask } from "@/features/task/model/types/task";
import { TASKS } from "@/features/task/model/constants/taskConstants";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(TASKS);

  const addTask = (title: string): void => {
    const newTask: ITask = { id: uuidv4(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string): void => {
    setTasks(
      tasks.map((task: ITask) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task: ITask) => task.id !== id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
};

export default TaskPage;
