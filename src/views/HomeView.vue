<script setup>
// import TheWelcome from "../components/TheWelcome.vue";
import HeroSection from "@/components/HeroSection.vue";
import HomeCard from "@/components/HomeCard.vue";
import TripListings from "@/components/TripListings.vue";
</script>

<template>
  <main>
    <HeroSection
      title="Explore the World"
      subtitle="Discover Your Next Adventure"
    />
    <HomeCard />
    <TripListings title="Highlight Of Our Trips" />
  </main>
</template>
