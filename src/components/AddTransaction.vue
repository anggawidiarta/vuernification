<template>
  <div class="w-full">
    <div class="font-semibold text-xl">Add New Transaction</div>
    <form id="id" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" name="text" id="text" v-model="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label for="amount">
          Amount
          <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          v-model="amount"
          placeholder="Enter amount..."
        />
      </div>
      <button class="btn">Add Transaction</button>
    </form>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');

const toast = useToast();

const emit = defineEmits('transactionSubmitted');

const isValidAmount = computed(() => {
  const value = parseFloat(amount.value);
  return !isNaN(value);
});

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Please add a text and amount');
    return;
  }

  if (!isValidAmount.value) {
    toast.error('Please add a valid amount');
    return;
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value)
  };

  emit('transactionSubmitted', transactionData);

  text.value = '';
  amount.value = '';
};
</script>

<style scoped>
label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}
</style>
