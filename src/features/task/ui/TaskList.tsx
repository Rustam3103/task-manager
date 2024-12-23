import React from "react";
import TaskItem from "./TaskItem";
import { ITaskListProps } from "../model";

const TaskList: React.FC<ITaskListProps> = ({
  tasks,
  toggleTask,
  removeTask,
}) => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
