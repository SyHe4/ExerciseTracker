<script setup lang="ts">
    import { ref } from 'vue'
    const open = ref(false)
</script>

<template>
    <div>
        <h1 class="title">
            My Activity
        </h1>
    </div>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <button class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click="open = true">
                Add Workout
            </button>
            <div v-if="open" class="modal">
                <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input" type="text">
                </div>
                </div>

                <div class="field">
                <label class="label">Date</label>
                <div class="control">
                    <input class="input" type="date" placeholder="mm/dd/yyyy">
                </div>
                </div>
                <div class="field">
                <label class="label">Duration</label>
                <div class="control">
                    <input class="input" type="text">
                </div>
                </div>
                <div class="field">
                <label class="label">Location</label>
                <div class="control">
                    <input class="input" type="text">
                </div>
                </div>
                <div class="field">
                <label class="label">Picture</label>
                <div class="control">
                    <input class="input" type="text">
                </div>
                </div>
                <div class="field">
                <label class="label">Type</label>
                <div class="select">
                    <select>
                        <option>Run</option>
                        <option>Bike</option>
                        <option>Strength</option>
                        <option>Cardio</option>
                        <option>Walk</option>
                    </select>
                </div>
                </div>
                <button @click="open = false">Save changes</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    color: #383838;
    padding-left: 10vh;
}
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>