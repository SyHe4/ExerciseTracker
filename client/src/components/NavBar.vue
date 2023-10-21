<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

const isActive = ref(false);

</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/" >Home</RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/activity">My Activity</RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/friends">Friend Activity</RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/search">Search for Friends</RouterLink>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" style="color: rgb(204, 51, 51);">
            Admin
          </a>
          <div class="navbar-dropdown has-background-grey-dark">
            <a class="navbar-item" style="color: rgb(204, 51, 51);">
              Users
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid rgb(228, 127, 44);
}
</style>