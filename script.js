let totalExpense = 0;

function addExpense() {
  const expenseInput = document.getElementById('expenseInput').value;
  const amountInput = parseFloat(document.getElementById('amountInput').value);

  if (expenseInput !== '' && !isNaN(amountInput) && amountInput > 0) {
    totalExpense += amountInput;
    const expenseList = document.getElementById('expenseList');
    const newExpense = document.createElement('li');
    newExpense.textContent = `${expenseInput}: $${amountInput.toFixed(2)}`;
    expenseList.appendChild(newExpense);

    document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);

    document.getElementById('expenseInput').value = '';
    document.getElementById('amountInput').value = '';
  } else {
    alert('Please enter valid expense and amount!');
  }
}
