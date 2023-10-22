<script setup lang="ts">
  import { getSession, useLogin } from '@/model/session'
  import { ref, setBlockTracking } from 'vue'
  const session = getSession()
  const { login, logout } = useLogin()

  const doLogin = () => {
    login('plotkinm@newpaltz.edu', '9uQFF1Lh')
  }

  const doLogout = () => {
    logout();
  }

  const toggleDropdown = () => {
    document.getElementById("dropdown")?.classList.toggle("show");
  } 

</script>

<template>
  <div class="has-text-left" v-if="session.user">
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }}
    <a class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click.prevent="doLogout">
        Log out
      </a>
    <a class="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://twitter.com/home" target="_blank" href="https://twitter.com/intent/tweet?text=Share Gym Buddy workout.">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>
        Tweet
      </span>
    </a>
  </div>
  <div class="buttons" v-else>
    <a class="button is-dark" style="background-color:rgb(204, 51, 51); color: white;">
      <strong>Sign up</strong>
    </a>
    <div class="dropdown">
      <div class="dropdown-trigger">
        <button class="button is-dark" aria-haspopup="true" aria-controls="dropdown-menu" style="background-color: rgb(204, 51, 51); color: white;" @click="toggleDropdown()" @click.prevent="doLogin">
          <span> Log in </span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Moshe Plotkin
          </a>
          <a href="#" class="dropdown-item">
            Sheldon Quigley
          </a>
          <a href="#" class="dropdown-item">
            Terrill Hills
          </a>
        </div>
      </div>
    </div>
    <a class="bd-tw-button button is-info" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://twitter.com/home" target="_blank" href="https://twitter.com/intent/tweet?text=Share Gym Buddy workout.">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>
        Tweet
      </span>
    </a>
  </div>
</template>


<style scoped>
.show {display: block;}
</style>