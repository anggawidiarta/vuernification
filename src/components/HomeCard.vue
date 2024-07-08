<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="mx-auto max-w-7xl my-16">
    <div class="container m-auto">
      <div
        class="grid grid-cols-1 p-4 gap-y-5 lg:grid-cols-2 place-items-center"
      >
        <div class="card glass w-96">
          <figure class="h-64">
            <img src="/place.jpg" class="h-full" alt="car!" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">For Tourist</h2>
            <p>Browse our guides to learn more about trip and trip plan</p>
            <div class="justify-end card-actions">
              <RouterLink to="/trips" class="btn btn-primary"
                >Browse Trips</RouterLink
              >
            </div>
          </div>
        </div>

        <div class="card glass w-96">
          <figure class="h-64">
            <img src="/tourist.jpg" class="h-full" alt="car!" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">For Guides</h2>
            <p>List of trip package for tourist who want to travel</p>
            <div class="justify-end card-actions">
              <RouterLink to="/trips/add" class="btn btn-primary"
                >Add Trip</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
