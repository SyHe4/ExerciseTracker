<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
    <div>
        <h1 class="title">
            Friend Activity
        </h1>
    </div>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <button class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click="open = true">
                Add Workout
            </button>
            <form v-if="open">
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
        </form>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                <div class="content">
                <p>
                <strong>Moshe Plotkin</strong> <small>@JewPaltz</small> <small>31m ago</small>
                <br>
                Biked through campus - { "lat": 41.7459793, "lng": -74.082801 }
                <br>
                <pre class="info">
                Distance: 1.2 mi    Duration: 0:45
                </pre>
                </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                <div class="content">
                <p>
                <strong>Moshe Plotkin</strong> <small>@JewPaltz</small> <small>2 days ago</small>
                <br>
                Swam through the gunk - { "lat": 41.7459, "lng": -74.082 }
                <br>
                <pre class="info">
                Distance: 2000 ft    Duration: 0:20
                </pre>
                </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                <div class="content">
                <p>
                <strong>Sheldon Quigley</strong> <small>@hbingley1</small> <small>6hrs ago</small>
                <br>
                Ran through campus - { "lat": 41.7459793, "lng": -74.082801 }
                <br>
                <pre class="info">
                Distance: 2500 ft    Duration: 0:25
                </pre>
                </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                    <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                    </a>
                    <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </a>
                    </div>
                </nav>
                </div>
            </article>
        </div>
    </div>
</div>
</template>

<style scoped>
.title {
    color: #383838;
    padding-left: 10vh;
}
.info {
    font-size: x-large;
}
</style>