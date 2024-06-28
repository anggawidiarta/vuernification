<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BalanceSection from './components/BalanceSection.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';

import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import AddTransaction from './components/AddTransaction.vue';

const toast = useToast();

const transactions = ref([
  {
    id: 1,
    text: 'Flower',
    amount: -20
  },
  {
    id: 2,
    text: 'Salary',
    amount: 300
  },
  {
    id: 3,
    text: 'Book',
    amount: -10
  },
  {
    id: 4,
    text: 'Camera',
    amount: 150
  }
]);
</script>
<template>
  <div
    class="flex flex-col items-center h-screen justify-center gap-12 w-full p-8 max-w-screen-md m-auto"
  >
    <HeaderSection />
    <BalanceSection />
    <IncomeExpense />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
    <h2 class="text-center tracking-wide">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique totam dolores
      elit. Temporibus similique totam dolores laudantium, consequatur itaque vel? Itaque cum,
      voluptas dolores porro mollitia aliquam tempore repellat ducimus voluptate repellendus ab
      impedit.
    </h2>
  </div>
</template>
