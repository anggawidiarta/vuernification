<template>
  <div class="w-full">
    <h3 class="text-xl font-semibold">History</h3>
    <ul id="list" class="list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="[transaction.amount < 0 ? 'minus' : 'plus']"
      >
        {{ transaction.text }}
        <span>{{
          transaction.amount < 0 ? '-$' + transaction.amount * -1.0 : '$' + transaction.amount
        }}</span>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  transactions: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>

<style scoped>
.delete-btn:focus {
  outline: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  /* margin-bottom: 40px; */
}

.list li {
  background-color: #fff;
  border: 1px solid black;
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
}

.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #c0392b;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  padding: 2px 4px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.list li:hover .delete-btn {
  opacity: 1;
}
</style>
