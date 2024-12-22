import React from "react";
import TaskItem from "./TaskItem";
import { ITaskListProps } from "../model";

const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
