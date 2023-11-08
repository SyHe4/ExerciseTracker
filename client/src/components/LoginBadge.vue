<script setup lang="ts">
  import { getSession, useLogin } from '@/model/session'
  import { dropdown } from '@/model/dropdown'
  const session = getSession()
  const { login, logout } = useLogin()

  const doLogin = () => {
    login('plotkinm@newpaltz.edu', '9uQFF1Lh')
  }

  const doLogin1 = () => {
    login('hbingley1@plala.or.jp', 'CQutx25i8r')
  }

  const doLogin2 = () => {
    login('rshawe2@51.la', 'OWsTbMUgFc')
  }

  const doLogout = () => {
    logout();
  }

  const doDropdown = () => {
    dropdown();
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
        <button class="button is-dark" id="btn" style="background-color: rgb(204, 51, 51); color: white;" @click="doDropdown">
          <span> Log in </span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
        <div class="dropdown-content" id="dropdown-menu">
          <a href="#" class="dropdown-item" @click.prevent="doLogin">
            Moshe Plotkin
          </a>
          <a href="#" class="dropdown-item" @click.prevent="doLogin1">
            Sheldon Quigley
          </a>
          <a href="#" class="dropdown-item" @click.prevent="doLogin2">
            Terrill Hills
          </a>
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
#dropdown-menu {
  display: none;
}
</style>