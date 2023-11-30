<template>
  <form class="newTask mb-3">
    <div class="row">
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Task Description</label>
          <textarea type="text" class="form-control range" v-model="taskDesc"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Due Date</label>
          <input type="date" class="form-control" style="width: 7cm" v-model="dueDate" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <label class="form-check-label">Completed</label>
            <input class="form-check-input" type="checkbox" v-model="completed" />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-2" :disabled="isFormInvalid" @click.prevent="submitForm">
          Add Task
        </button>
        <button class="btn btn-danger" @click.prevent="cancel">
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { inject, ref, computed } from "vue";
import { useRouter } from "vue-router";

type Task = {
  taskDesc: string;
  dueDate: string;
  completed: boolean;
};

type TaskManager = {
  addTask(task: Task): void;
  getAllTasks(): Task[];
}

const router = useRouter();
const $tasks = inject("$tasks") as TaskManager;

let taskDesc = ref<string>("");
let dueDate = ref<string>("");
let completed = ref<boolean>(false);

function cancel(): void {
  router.push("/tasks")
}

function submitForm(): void {
  if (!taskDesc.value || !dueDate.value) {
    alert("Please fill the form.");
    return;
  } else {
    let newTask: Task = {
      taskDesc: taskDesc.value,
      dueDate: dueDate.value,
      completed: completed.value,
    };

    $tasks.addTask(newTask);

    /* Empties the input fields after submit */
    taskDesc.value = "";
    dueDate.value = "";
    completed.value = false;

    router.push({ path: "/taskList" });
  }
}

const isFormInvalid = computed(() => !taskDesc.value || !dueDate.value);
</script>
