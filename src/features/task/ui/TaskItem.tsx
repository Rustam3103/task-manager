import React from "react";
import { ITaskItemProps } from "../model";

const TaskItem: React.FC<ITaskItemProps> = ({
  task,
  toggleTask,
  removeTask,
}) => {
  return (
    <div className="p-2 border-b flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>
      <button onClick={() => removeTask(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
