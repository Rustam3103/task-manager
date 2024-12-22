import TaskList from "@/features/task/ui/TaskList";
import React from "react";

const tasks = [
  { id: "1", title: "Task 1", completed: false },
  { id: "2", title: "Task 2", completed: true },
];

const TaskPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
