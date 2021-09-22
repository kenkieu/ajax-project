var $dayForm = document.querySelector('#day-form')

function handleDayForm(event) {
  event.preventDefault();
  var budget = {};
  data.currentWeather.destination = $dayForm.elements.destination.value
  budget.transport = $dayForm.elements.transport.value
  budget.food = $dayForm.elements.food.value
  budget.activities = $dayForm.elements.activities.value
  budget.souvenirs = $dayForm.elements.souvenirs.value
  budget.reserver = $dayForm.elements.reserve.value
  data.entry.push(budget);
}

$dayForm.addEventListener("submit", handleDayForm)
