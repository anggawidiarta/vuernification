<template>
  <!-- Main app component -->
  <div
    class="flex flex-col items-center justify-center w-full h-full max-w-screen-md gap-4 p-8 m-auto"
  >
    <!-- Header section -->
    <HeaderSection />
    <!-- Balance section -->
    <BalanceSection :balance="total" />
    <!-- Income expense section -->
    <IncomeExpense :income="+income" :expense="+expense" />
    <!-- Transaction list -->
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <!-- Add transaction section -->
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
/**
 * The main app component.
 * Displays the header section, balance section, income expense section, transaction list and add transaction section.
 */

import HeaderSection from '@/components/HeaderSection.vue';
import BalanceSection from './components/BalanceSection.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import TransactionList from './components/TransactionList.vue';

import { generateUniqueId, saveTransactionsToLocalStorage } from '@/utils/index';

import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import AddTransaction from './components/AddTransaction.vue';
import { onMounted } from 'vue';

const toast = useToast();

/**
 * The array of transactions.
 */
const transactions = ref([]);

onMounted(() => {
  transactions.value = JSON.parse(localStorage.getItem('transactions')) || [];
});

/**
 * Computed property that calculates the total balance of all transactions.
 */
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return (acc += transaction.amount);
  }, 0);
});

/**
 * Computed property that calculates the total income of all transactions.
 */
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);
});

/**
 * Computed property that calculates the total expense of all transactions.
 */
const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);
});

/**
 * Handles the deletion of a transaction.
 * @param {string} id - The ID of the transaction to be deleted.
 */
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocalStorage(transactions);

  toast.success('Transaction deleted successfully!');
};

/**
 * Handles the submission of a new transaction.
 * @param {Object} transactionData - The data of the new transaction.
 */
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
