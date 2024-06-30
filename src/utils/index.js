export const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000000);
};

export const saveTransactionsToLocalStorage = (object) => {
  localStorage.setItem('transactions', JSON.stringify(object.value));
};
