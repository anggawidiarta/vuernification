<script setup lang="ts">
const cars: string[] = ["Ford", "BMW", "Fiat"];
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(car, index) in cars" :key="index">
        <p style="display: block">
          {{ car }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
