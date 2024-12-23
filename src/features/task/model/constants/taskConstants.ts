import { ITask } from "../types";

export const TASK_STATUSES = {
  PENDING: "pending",
  COMPLETED: "completed",
};

export type TaskStatus = "pending" | "completed";

export const TASKS: ITask[] = [
  { id: "1", title: "Task 1", completed: false },
  { id: "2", title: "Task 2", completed: true },
];
