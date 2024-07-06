<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";

const props = defineProps({
  trip: {
    type: Object,
    required: true,
  },
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.trip.description;
  if (description.length > 100) {
    if (showFullDescription.value) {
      return description;
    }
    return description.slice(0, 100) + "...";
  }
  return description;
});
</script>

<template>
  <div class="relative bg-white shadow-md rounded-xl glassmorphism">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-white">{{ trip.type }}</div>
        <h3 class="text-xl font-bold">{{ trip.title }}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ truncatedDescription }}
        </div>
        <button
          @click="toggleFullDescription"
          class="mb-5 text-green-500 hover:text-green-600"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="mb-2 text-green-500">{{ trip.price }} / Year</h3>

      <div class="mb-5 border border-gray-100"></div>

      <div class="flex flex-col justify-between mb-4 lg:flex-row">
        <div class="mb-3 text-orange-700">
          <i class="text-orange-700 pi pi-map-marker"></i>
          {{ trip.location }}
        </div>
        <RouterLink
          :to="'/trips/' + trip.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassmorphism {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
