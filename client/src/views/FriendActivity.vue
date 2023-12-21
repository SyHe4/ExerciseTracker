<script setup lang="ts">
import { openForm, closeForm } from '@/model/form';
import { getPosts, type Post } from '@/model/posts';
import { getUsers, type User } from '@/model/users';
import { ref, computed } from 'vue';
const posts = ref([] as Post[])
getPosts().then((data) => {
    posts.value = data
})
const users = ref([] as User[]);
getUsers().then((data) => {
    users.value = data;
})
const doOpenForm = () => {
    openForm();
}

const doCloseForm = () => {
    closeForm();
}
const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const data = ref<User[]>([]);
const name = ref("");

async function getAsyncData(_name: string) {
    if (name.value !== _name) {
        name.value = _name;
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
    }

    // String cleared
    if (!_name.length) {
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
        return;
    }

    // Reached last page
    if (page.value > totalPages.value) {
        return;
    }

    isFetching.value = true;
    try {
        const data = await searchUsers(_name, page.value);
        data.value = [...data.value, ..._data];
        page.value += 1;
        totalPages.value = 1 //_data.total_pages;
    } catch (err) {
        console.error(err);
    } finally {
        isFetching.value = false;
    }
}

function getMoreAsyncData() {
    getAsyncData(name.value);
}
</script>

<template>
    <div>
        <h1 class="title">
            Friend Activity
        </h1>
    </div>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <button class="button is-dark" style="background-color: rgb(204, 51, 51); color: white;" @click = "doOpenForm">
                Add Workout
            </button>
            <div class="modal" id="formBtn">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">  
                        <p class="modal-card-title"> Add Workout </p>
                        <button class="delete" aria-label="close" id="formBtn" @click = "doCloseForm"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                <label class="label">Title/Description</label>
                <div class="control">
                    <input class="input" type="text">
                    <o-autocomplete
                        :data="data"
                        placeholder="You can tag your friends here"
                        field="title"
                        :loading="isFetching"
                        check-scroll
                        open-on-focus
                        :debounce="500"
                        @input="getAsyncData"
                        @scroll-end="getMoreAsyncData">
                        <template #default="props">
                            <div class="media">
                                <div class="media-left">
                                    <img
                                        width="32"
                                        :src="props.options.thumbnail" />
                                </div>
                                <div class="media-content">
                                    {{ props.option.title }}
                                </div>
                            </div>
                        </template>
                        <template v-if="page > totalPages" #footer>
                            <span class="ex-text-grey">
                                Thats it! No more users found.
                            </span>
                        </template>
                    </o-autocomplete>
                </div>
                </div>

                <div class="field">
                <label class="label">Date</label>
                <div class="control">
                    <input class="input" type="date" placeholder="mm/dd/yyyy">
                </div>
                </div>
                <div class="field">
                <label class="label">Distance</label>
                <div class="control">
                    <input class="input" type="text">
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
                    </section>
                    <footer class="modal-card-foot">
                        <button> Save changes </button>
                        <button id="formBtn" @click = "doCloseForm"> Cancel </button>
                    </footer>
                </div>
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
        <div v-for="post in posts" :key="post.id" class="post">
            <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img :src="post.picture" :alt="post.title"/>
                    </figure>
                </div>
                <div class="media-content">
                <div class="content">
                <p>
                <strong>{{ post.name }}</strong> <small>{{ post.username }}</small> <small>{{ post.date }}</small>
                <br>
                {{ post.title }} - {{ post.location }}
                <br>
                <pre class="info">
                Distance: {{ post.distance }}    Duration: {{ post.duration }}
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
</div>
</template>

<style scoped>
.title {
    color: #383838;
    padding-left: 10vh;
}
.modal-card{
  top: 20%;
  left: 50%;
  width: 800px;
  margin-left: -350px;
  margin-top: -90px;
}
.info {
    font-size: x-large;
}
</style>
//npm install @oruga-ui/oruga-next