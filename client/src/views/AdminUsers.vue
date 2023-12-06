<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
})
import { openForm, closeForm } from '@/model/form'

const doOpenForm = () => {
    openForm();
}

const doCloseForm = () => {
    closeForm();
}
</script>

<template>
    <div>
        <h1 class="title">Users</h1>
        <a class="button is-dark" style="background-color:rgb(204, 51, 51); color: white;" @click = "doOpenForm">
            Add User
        </a>
        <div class="modal" id="formBtn">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title"> Add User </p>
                    <button class="delete" aria-label="close" id="formBtn" @click = "doCloseForm"></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label class="label"> First Name </label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label"> Last Name </label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label"> Username </label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label"> Email </label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label"> Password </label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button> Save changes </button>
                    <button id="formBtn" @click = "doCloseForm"> Cancel </button>
                </footer>
            </div>
        </div>
        <table class="table is-bordered">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Emails</th>
                <th>Handle</th>
                <th>Admin</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>["{{ user.email }}"]</td>
                <td>{{ user.username }}</td>
                <td>{{ user.role }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.table {
    margin-left: 70vh;
    padding-top: 20vh;
}
a {
    margin-left: 70vh;
}
.modal-card{
  top: 20%;
  left: 50%;
  width: 800px;
  margin-left: -350px;
  margin-top: -90px;
}
.title {
    color: #383838;
    padding-left: 10vh;
}
</style>@/model/form