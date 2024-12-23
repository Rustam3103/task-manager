export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITaskListProps {
  tasks: ITask[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export interface ITaskItemProps {
  task: ITask;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export interface IAddTaskProps {
  addTask: (title: string) => void;
}
