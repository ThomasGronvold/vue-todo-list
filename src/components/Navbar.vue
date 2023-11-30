<template>
  <nav class="navbar-dark bg-dark navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link
        to="/tasks"
        class="nav-link navbar-brand"
        active-class="active"
        aria-current="page"
        >To Do List</router-link
      >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <router-link to="/taskList" class="nav-link" exact-active-class="active"  aria-current="page" 
            >Tasks</router-link
          >
        </li>
        <li>
          <router-link to="taskList/createTask" class="nav-link" exact-active-class="active" aria-current="page"
            >Create Task</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
