<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
})
</script>

<template>
    <div>
        <h1 class="title">
            Search for Friends
        </h1>
    </div>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <div class="field">
        <div class="control">
            <input class="input" type="text" placeholder="Search">
        </div>
            </div>
        <div class="box" v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }}
        </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    color: #383838;
    padding-left: 10vh;
}
</style>