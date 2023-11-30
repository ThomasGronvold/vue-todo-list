import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../index.css";
import $tasks from "./data";
import router from "./router";

const app = createApp(App);

app.use(router);

app.provide("$tasks", $tasks);

app.mount("#app");
