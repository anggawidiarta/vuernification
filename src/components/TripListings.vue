<!-- eslint-disable no-unused-vars -->
<script setup>
import { reactive, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import axios from "axios";
import TripListing from "./TripListing.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Our Trips",
  },
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  enableViewMore: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  trips: [],
  isLoading: true,
  showAll: false,
});

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const toggleShowAll = () => {
  state.showAll = !state.showAll;
};

onMounted(async () => {
  try {
    const response = await axios.get("/api/trips");
    state.trips = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
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
        {{ title }}
      </h2>
      <div v-if="state.isLoading">
        <span class="loading loading-dots loading-lg"></span>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TripListing
          v-for="(trip, index) in state.showAll
            ? state.trips
            : state.trips.slice(0, 3)"
          :key="trip.id"
          :trip="trip"
        />
      </div>
      <div
        v-if="
          !state.isLoading && state.trips.length > 6 && props.enableViewMore
        "
        class="text-center mt-6"
      >
        <button @click="toggleShowAll" class="btn btn-primary">
          {{ state.showAll ? "View Less" : "View More" }}
        </button>
      </div>
    </div>
  </section>
</template>
