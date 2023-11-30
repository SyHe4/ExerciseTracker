<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
