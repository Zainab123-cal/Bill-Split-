const billAmountInput = document.getElementById('billAmount');
const numPeopleInput = document.getElementById('numPeople');
const tipPercentInput = document.getElementById('tipPercent');
const calculateButton = document.getElementById('calculateButton');
const resultDiv = document.getElementById('result');
const eachPersonOwesSpan = document.getElementById('eachPersonOwes');
const totalTipSpan = document.getElementById('totalTip');
const totalAmountSpan = document.getElementById('totalAmount');

calculateButton.addEventListener('click', function(event) {
  event.preventDefault(); // add this line to prevent form submission
  calculateBill();
});

function calculateBill() {
  const billAmount = parseFloat(billAmountInput.value);
  const numPeople = parseInt(numPeopleInput.value);
  const tipPercent = parseFloat(tipPercentInput.value) / 100;

  if (billAmount <= 0 || numPeople <= 0 || tipPercent <= 0) {
    alert('Please enter valid values');
    return;
  }

  const totalTip = billAmount * tipPercent;
  const totalAmount = billAmount + totalTip;
  const eachPersonOwes = totalAmount / numPeople;

  eachPersonOwesSpan.textContent = `₹${eachPersonOwes.toFixed(2)}`;
  totalTipSpan.textContent = `₹${totalTip.toFixed(2)}`;
  totalAmountSpan.textContent = `₹${totalAmount.toFixed(2)}`;
  resultDiv.style.display = 'block';
}