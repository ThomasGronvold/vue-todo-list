<template>
  <h4>List Items</h4>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Task Description</th>
        <th>Due Date</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in allTasks" :key="index">
        <td>{{ task.taskDesc }}</td>
        <td>{{ task.dueDate }}</td>
        <td>{{ task.completed }}</td>
        <td>
          <button @click.prevent="removeTask(index)" class="btn btn-danger btn-sm me-2">
            Remove
          </button>
          <button @click.prevent="editTask(index)" class="btn btn-warning btn-sm">Edit</button>
        </td>
      </tr>
      <tr>
        <td colspan="3"></td>
        <td>
          <button @click.prevent="newTask" class="btn btn-primary">New Task</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface Task {
  taskDesc: null;
  dueDate: number;
  completed: boolean;
}

type TaskManager = {
  getAllTasks(): Task[];
  removeTask(index: number): void;
};

const $tasks = inject("$tasks") as TaskManager;

let allTasks = $tasks.getAllTasks() as Task[];

/* Functions */

const newTask = () => {
  router.push("taskList/createTask");
};

const editTask = (index: number) => {
  router.push(`taskList/editTask/${index}`);
};

const removeTask = (index: number) => {
  $tasks.removeTask(index);
  allTasks = $tasks.getAllTasks();
};
</script>
