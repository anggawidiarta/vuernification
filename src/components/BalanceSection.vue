<template>
  <section class="w-full">
    <div class="text-xl font-semibold">Balance</div>
    <div>${{ props.balance }}</div>
  </section>
</template>

<script setup>
const props = defineProps({
  balance: {
    type: Number,
    required: true
  }
});
</script>
