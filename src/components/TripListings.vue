<!-- eslint-disable no-unused-vars -->
<script setup>
import { reactive, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import axios from "axios";
import TripListing from "./TripListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  trips: [],
  isLoading: true,
});

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

onMounted(async () => {
  try {
    const response = await axios.get("/api/trips");
    state.trips = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
    // console.log(state.trips);
  }
});
</script>

<template>
  <section class="px-4 py-10">
    <div class="container m-auto">
      <h2
        :class="[
          isActiveLink('/trips') ? 'py-10' : null,
          'mb-6',
          'text-4xl',
          'font-bold',
          'text-center',
        ]"
      >
        Our Trips
      </h2>
      <div v-if="state.isLoading">
        <span class="loading loading-dots loading-lg"></span>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TripListing v-for="trip in state.trips" :key="trip.id" :trip="trip" />
      </div>
    </div>
  </section>
</template>
