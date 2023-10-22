<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">Users</h1>
        <a class="button is-dark" style="background-color:rgb(204, 51, 51); color: white;">
            Add User
        </a>
        <table class="table is-bordered ">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Emails</th>
                <th>Handle</th>
                <th>Admin</th>
            </tr>
            <tr>
                <td>Moshe</td>
                <td>Plotkin</td>
                <td>["plotkinm@newpaltz.edu"]</td>
                <td>JewPaltz</td>
                <td>true</td>
            </tr>
            <tr>
                <td>Sheldon</td>
                <td>Quigley</td>
                <td>["hbingley1@plala.or.jp"]</td>
                <td>hbingley1</td>
                <td>false</td>
            </tr>
            <tr>
                <td>Terrill</td>
                <td>Hills</td>
                <td>["rshawe2@51.la"]</td>
                <td>rshawe2</td>
                <td>false</td>
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
.title {
    color: #383838;
    padding-left: 10vh;
}
</style>