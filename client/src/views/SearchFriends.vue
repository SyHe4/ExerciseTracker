<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
});
const searchbar = () => {
    const input = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    const filteredUsers = users.value.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(input) || user.username.toLowerCase().includes(input);
    });
    users.value = filteredUsers;
}
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
            <input class="input" id ="searchInput" type="text" placeholder="Search" onkeyup="searchbar()">
        </div>
            </div>
        <div class="box" v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }} @{{ user.username }}
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