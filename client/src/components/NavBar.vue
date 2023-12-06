<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import { getUsers, type User } from '@/model/users';
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
})
const isActive = ref(false);
const isAdmin = computed(() => {
  return users.value.length > 0 && users.value[0].role === true;
});
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/" >
        <span class="icon">
          <i class="fas fa-dumbbell"></i>
        </span>
        Home
        </RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/activity">
          <span class="icon">
            <i class="fas fa-running"></i>
          </span>
          My Activity
        </RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/friends">
          <span class="icon">
            <i class="fas fa-users"></i>
          </span>
          Friend Activity
        </RouterLink>
        <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/search">
          <span class="icon">
            <i class="fas fa-user-plus"></i>
          </span>
          Search for Friends
        </RouterLink>

        <div class="navbar-item has-dropdown is-hoverable" v-if="isAdmin">
          <a class="navbar-link" style="color: rgb(204, 51, 51);">
            Admin
          </a>
          <div class="navbar-dropdown has-background-grey-dark">
            <RouterLink class="navbar-item" style="color: rgb(204, 51, 51);" to="/admin">
              Users
            </RouterLink>
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