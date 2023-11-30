import { reactive } from "vue";

type Task = {
  taskDesc: string;
  dueDate: string;
  completed: boolean;
};

const tasksKey: string = "tasks";

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
