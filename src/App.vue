<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script lang="ts">
  import Navbar from "./components/Navbar.vue"

export default {
components: {
    Navbar
  },
};
</script>
