interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITaskListProps {
  tasks: ITask[];
}

export interface ITaskItemProps {
  task: ITask;
}
