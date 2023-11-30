<script setup lang="ts">
</script>

<template>
  <div class="container" id="app">
    <div class="columns">
      <div class="column is-half is-offset-3">
        <div class="notification" style="color: rgb(228, 127, 44);">
          Let's move today!
        </div>
        <div class="box" style="color: rgb(204, 51, 51);">
          <u> Today </u>
          <div class="column" id="colId">
            Distance
          </div>
          <div class="column" id="tWId">
            Duration
          </div>
          <div class="column" id="colId">
            Avg Pace
          </div>
          <div class="column" id="colId">
            Calories
          </div>
          <h3 class="dist">
            0 ft
          </h3>
          <h3 class="dur">
            0:0
          </h3>
          <h3 class="values">
            NaN mph
          </h3>
          <h3 class="values">
            0
          </h3>
        </div>
        <div class="box" style="color: rgb(204, 51, 51);">
          <u> This Week </u>
          <div class="column" id="tWId">
            Distance
          </div>
          <div class="column" id="tWId">
            Duration
          </div>
          <div class="column" id="colId">
            Avg Pace
          </div>
          <div class="column" id="colId">
            Calories
          </div>
          <h3 class="dist">
            0 ft
          </h3>
          <h3 class="dur">
            0:0
          </h3>
          <h3 class="values">
            NaN mph
          </h3>
          <h3 class="values">
            0
          </h3>
        </div>
        <div class="box" style="color: rgb(204, 51, 51);">
          <u> All Time </u>
          <div class="column" id="aTId">
            Distance
          </div>
          <div class="column" id="tWId">
            Duration
          </div>
          <div class="column" id="colId">
            Avg Pace
          </div>
          <div class="column" id="colId">
            Calories
          </div>
          <h3 class="dist">
            0 ft
          </h3>
          <h3 class="dur">
            0:0
          </h3>
          <h3 class="values">
            NaN mph
          </h3>
          <h3 class="values">
            0
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(54, 54, 54);
  height: 15vh;
  box-shadow: 0 0 1rem #0004;
}
</style>