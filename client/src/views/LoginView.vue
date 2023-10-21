<script setup lang="ts"></script>

<template>
  <div class="hero-body">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" style="color: white;"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" style="color: white;"/>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button">Login</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(54, 54, 54);
  box-shadow: 0 0 1rem #0004;
}
.input{
  border-color: rgb(68, 68, 68);
  background-color: rgb(68, 68, 68);
}
.button {
  color: white;
  border-color: rgb(204, 51, 51);
  background-color: rgb(204, 51, 51);
}
::placeholder {
  color: white;
}
</style>