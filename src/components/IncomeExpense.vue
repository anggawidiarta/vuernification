<template>
  <section
    class="flex w-full py-2 border border-black shadow-md justify-evenly hover:shadow-lg transition-all duration-150 shadow-gray-300"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-bold">Income</h3>
      <p class="text-green-500">${{ props.income }}</p>
    </div>
    <div class="border h-3/4 place-self-center"></div>
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-bold">Expense</h3>
      <p class="text-red-500">-${{ props.expense * -1.0 }}</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  income: {
    type: Number,
    required: true
  },
  expense: {
    type: Number,
    required: true
  }
});
</script>
