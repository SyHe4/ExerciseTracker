<script setup lang="ts">
  import { getSession, useLogin } from '@/model/session'

  const session = getSession()
  const { login, logout } = useLogin()

  const doLogin = () => {
    login('atuny0@sohu.com', '9uQFF1Lh')
  }

  const doLogout = () => {
    logout();
  }

</script>

<template>
  <div class="has-text-right" v-if="session.user">
    Welcome, {{ session.user.firstName }} {{ session.user.lastName }} <br>
    <a class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click.prevent="doLogout">
        Log out
      </a>
  </div>
  <div class="buttons" v-else>
    <a class="button is-dark" style="background-color:rgb(204, 51, 51); color: white;">
      <strong>Sign up</strong>
    </a>
    <a class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click.prevent="doLogin">
      Log in
    </a>
  </div>
  <div class="buttons">
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