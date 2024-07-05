<script setup lang="ts">
import { ref } from "vue";

const jokes = ref("");

const getJokes = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  jokes.value = data.joke;
};
</script>

<template>
  <div class="container">
    <h3 style="color: black">Don't Laugh Challenge</h3>
    <div id="joke" class="joke">
      {{ jokes ? jokes : "Jokes Will Placed Here" }}
    </div>
    <button id="jokeBtn" class="btn" @click="getJokes">Get Another Joke</button>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
}

h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}

.joke {
  color: black;
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
}

.btn {
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}
</style>
