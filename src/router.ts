import { createRouter, createWebHashHistory } from "vue-router";
import ToDoList from "./views/ToDoList.vue";
import ListInput from "./views/CreateTask.vue";
import Pages from "./views/Pages.vue";
import EditTask from "./views/EditTask.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: ToDoList },
    {
      path: "/taskList",
      component: Pages,

      children: [
        { path: "", component: ToDoList },
        { path: "createTask", component: ListInput },
        { path: "editTask/:index", component: EditTask, props: true },
      ],
    },
  ],
});

export default router;
