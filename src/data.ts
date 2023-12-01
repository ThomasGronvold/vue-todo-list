import { reactive } from "vue";

export type Task = {
  taskDesc: string;
  dueDate: string;
  completed: boolean;
};

export type TaskManager = {
  addTask(task: Task): void;
  getAllTasks(): Task[];
  getSpecificTask(index: number): Task;
  editTask(task: Task, index: number): void;
  removeTask(index: number) :void;
};

const tasksKey: string = "tasks";

/* If there is no array in localstorage, one will be made */
if (!localStorage.getItem(tasksKey)) {
  localStorage.setItem(tasksKey, JSON.stringify([]));
}

let taskJson = localStorage.getItem(tasksKey);
let parsedTasks = JSON.parse(taskJson || "null");

let tasksStore: Task[] = reactive(parsedTasks);


function save() {
  localStorage.setItem(tasksKey, JSON.stringify(tasksStore));
}

export default {
  addTask(task: Task) {
    tasksStore.push(task);
    save();
  },

  editTask(task: Task, i: number) {
    tasksStore[i] = task;
    save();
  },

  removeTask(index: number): void {
    tasksStore.splice(index, 1);
    save();
  },

  getAllTasks(): Task[] {
    return tasksStore;
  },

  getSpecificTask(index: number): Task {
    return tasksStore[index];
  },
};
