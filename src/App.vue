<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full max-w-screen-md gap-4 p-8 m-auto"
  >
    <HeaderSection />
    <BalanceSection :balance="total" />
    <IncomeExpense :income="+income" :expense="+expense" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import HeaderSection from '@/components/HeaderSection.vue';
import BalanceSection from './components/BalanceSection.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';

import { generateUniqueId, saveTransactionsToLocalStorage } from '@/utils/index';

import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import AddTransaction from './components/AddTransaction.vue';

const toast = useToast();

const transactions = ref([]);

// const logTransaction = computed(() => {
//   return transactions.value;
// });

// get total balance
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return (acc += transaction.amount);
  }, 0);
});

// get income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);
});

console.log(income);

// get expense
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);
});

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage(transactions);

  toast.success('Transaction deleted successfully!');
};

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  });

  saveTransactionsToLocalStorage(transactions);
  toast.success('Transaction added successfully!');
};
</script>
