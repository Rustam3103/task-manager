import React from "react";
import { ITaskItemProps } from "../model";

const TaskItem: React.FC<ITaskItemProps> = ({ task }) => {
  return (
    <div className="p-2 border-b">
      <input type="checkbox" checked={task.completed} readOnly />
      <span className={task.completed ? "line-through" : ""}>{task.title}</span>
    </div>
  );
};

export default TaskItem;
