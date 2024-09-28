const totalInput = document.getElementById('total');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const tipResultDisplay = document.getElementById('tip-result');
const totalResultDisplay = document.getElementById('total-result');

function calculateTip() {
  const total = parseFloat(totalInput.value);
  const tipPercentage = parseFloat(tipInput.value);
  const numberOfPeople = parseInt(peopleInput.value);

  if (isNaN(total) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
    tipResultDisplay.textContent = '$0.00';
    totalResultDisplay.textContent = '$0.00';
    return;
  }

  // Calcular propina por persona
  const tipAmountPerPerson = (total * (tipPercentage / 100)) / numberOfPeople;

  // Calcular el total por persona
  const totalPerPerson = (total / numberOfPeople) + tipAmountPerPerson;

  // Actualizar los resultados en la interfaz
  tipResultDisplay.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
  totalResultDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

totalInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
