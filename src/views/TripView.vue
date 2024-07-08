<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive } from "vue"; // Added reactive import

import axios from "axios";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const state = reactive({
  trip: {},
  isLoading: true,
});

const deleteTrip = async () => {
  try {
    const confirm = window.confirm(
      "Are you sure you want to delete this trip?"
    );
    if (!confirm) return;
    else if (confirm) {
      const response = await axios.delete(`/api/trips/${id}`);
      state.trip = response.data;
      router.push("/trips");
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/trips/${id}`);
    state.trip = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div v-if="state.isLoading" class="h-screen flex justify-center items-center">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  <section v-else-if="!state.isLoading" class="bg-gray-50">
    <div class="container px-6 py-10 m-auto">
      <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
        <main>
          <div
            class="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
          >
            <div class="mb-4 text-gray-500">{{ state.trip.type }}</div>
            <h1 class="mb-4 text-3xl font-bold">{{ state.trip.title }}</h1>
            <div
              class="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
            >
              <i class="mr-2 text-xl text-blue-700 pi pi-map-marker"></i>
              <p class="text-blue-700">{{ state.trip.location }}</p>
            </div>
          </div>

          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-lg font-bold text-blue-800">
              Trip Description
            </h3>

            <p class="mb-4">
              {{ state.trip.description }}
            </p>

            <h3 class="mb-2 text-lg font-bold text-blue-800">Price</h3>

            <p class="mb-4">{{ state.trip.price }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Company Info</h3>

            <h2 class="text-2xl">{{ state.trip.company.name }}</h2>

            <p class="my-2">
              {{ state.trip.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="p-2 my-2 font-bold bg-blue-100">
              {{ state.trip.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="p-2 my-2 font-bold bg-blue-100">
              {{ state.trip.company.contactPhone }}
            </p>
          </div>

          <!-- Manage -->
          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Manage Trip</h3>
            <RouterLink
              :to="`/trips/edit/${state.trip.id}`"
              class="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              >Edit Trip</RouterLink
            >
            <button
              @click="deleteTrip"
              class="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Delete Trip
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
