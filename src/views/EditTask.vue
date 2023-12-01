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
          Confirm Edit
        </button>
        <button class="btn btn-danger" @click.prevent="cancel">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { inject, ref, computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Task, TaskManager} from "../data"

export default defineComponent({
  props: ["index"],
  setup(props) {
    const $tasks = inject("$tasks") as TaskManager;
    const router = useRouter();
    const index = ref(props.index);
    const taskToEdit = $tasks.getSpecificTask(index.value);

    let taskDesc = ref(taskToEdit.taskDesc);
    let dueDate = ref(taskToEdit.dueDate);
    let completed = ref(taskToEdit.completed);

    const cancel = (): void => {
      router.push("/taskList");
    };

    const submitForm = (): void => {
      if (!taskDesc || !dueDate) {
        alert("Please fill the form.");
        return;
      } else {
        let newTask: Task = {
          taskDesc: taskDesc.value,
          dueDate: dueDate.value,
          completed: completed.value,
        };

        $tasks.editTask(newTask, index.value);

        router.push({ path: "/taskList" });
      }
    };

    const isFormInvalid = computed(() => !taskDesc.value || !dueDate.value);

    return {
      taskDesc,
      dueDate,
      completed,
      cancel,
      submitForm,
      isFormInvalid,
    };
  },
});
</script>
