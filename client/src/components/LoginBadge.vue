<script setup lang="ts">
  import { getSession, useLogin } from '@/model/session'

  const session = getSession()
  const { login, logout } = useLogin()

  const doLogin = () => {
    login('', '')
  }

  const doLogout = () => {
    logout();
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
    <div class="dropdown is-active">
      <div class="dropdown-trigger">
        <button class="button is-dark" aria-haspopup="true" aria-controls="dropdown-menu" style="background-color: rgb(204, 51, 51); color: white;" @click.prevent="doLogin">
          <span> Log in </span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a class="dropdown-item">Moshe Plotkin</a>
        <a class="dropdown-item">Sheldon Quigley</a>
        <a class="dropdown-item">Terrill Hills</a>
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

</style>