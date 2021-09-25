var $home = document.querySelector('#home');
var $view = document.querySelectorAll('.view');
var $tripSelect = document.querySelector('#trip-type');
var $tripTypeButton = document.querySelector('.trip-type-button');
var $dayForm = document.querySelector('#day-form');
var $dayTripContainer = document.querySelector('#day-summary');
var $dayTransportBudget = document.querySelector('#day-transport-budget');
var $dayFoodBudget = document.querySelector('#day-food-budget');
var $dayActivitiesBudget = document.querySelector('#day-activities-budget');
var $daySouvenirsBudget = document.querySelector('#day-souvenirs-budget');
var $dayReserveBudget = document.querySelector('#day-reserve-budget');
var $daySummaryButton = document.querySelector('.day-summary-btn');
var $dayPlanner = document.querySelector('#day-planner');
var $daySpentForm = document.querySelector('#day-spent-form');
var $daySpentTransportInput = document.querySelector('#day-spent-transport-input');
var $daySpentFoodInput = document.querySelector('#day-spent-food-input');
var $daySpentActivitiesInput = document.querySelector('#day-spent-activities-input');
var $daySpentSouvenirsInput = document.querySelector('#day-spent-souvenirs-input');
var $daySpentReserveInput = document.querySelector('#day-spent-reserve-input');
var $extendedForm = document.querySelector('#extended-form');
var $extendedTripContainer = document.querySelector('#extended-summary');
var $extendedSummaryButton = document.querySelector('.extended-summary-btn');
var $extendedTransportBudget = document.querySelector('#extended-transport-budget');
var $extendedLodgingBudget = document.querySelector('#extended-lodging-budget');
var $extendedFoodBudget = document.querySelector('#extended-food-budget');
var $extendedActivitiesBudget = document.querySelector('#extended-activities-budget');
var $extendedSouvenirsBudget = document.querySelector('#extended-souvenirs-budget');
var $extendedReserveBudget = document.querySelector('#extended-reserve-budget');
var $extendedSpentTransportInput = document.querySelector('#extended-spent-transport-input');
var $extendedSpentLodgingInput = document.querySelector('#extended-spent-lodging-input');
var $extendedSpentFoodInput = document.querySelector('#extended-spent-food-input');
var $extendedSpentActivitiesInput = document.querySelector('#extended-spent-activities-input');
var $extendedSpentSouvenirsInput = document.querySelector('#extended-spent-souvenirs-input');
var $extendedSpentReserveInput = document.querySelector('#extended-spent-reserve-input');
var $extendedPlanner = document.querySelector('#extended-planner');
var $extendedSpentForm = document.querySelector('#extended-spent-form');

function handleTripSelection(event) {
  event.preventDefault();
  switchView($tripSelect.value);
}

function handleDayForm(event) {
  event.preventDefault();
  var dayBudget = {};
  dayBudget.destination = $dayForm.elements['day-destination'].value;
  dayBudget.transport = $dayForm.elements['day-budget-transport'].value;
  dayBudget.food = $dayForm.elements['day-budget-food'].value;
  dayBudget.activities = $dayForm.elements['day-budget-activities'].value;
  dayBudget.souvenirs = $dayForm.elements['day-budget-souvenirs'].value;
  dayBudget.reserve = $dayForm.elements['day-budget-reserve'].value;
  data.dayBudget = dayBudget;
  getCurrentWeather(data.dayBudget.destination);
  populateDayBudget();
}

function handleExtendedForm(event) {
  event.preventDefault();
  var extendedBudget = {};
  getForecastWeather($extendedForm.elements['extended-destination'].value);
  extendedBudget.destination = $extendedForm.elements['extended-destination'].value;
  extendedBudget.transport = $extendedForm.elements['extended-transport'].value;
  extendedBudget.lodging = $extendedForm.elements['extended-lodging'].value;
  extendedBudget.food = $extendedForm.elements['extended-food'].value;
  extendedBudget.activities = $extendedForm.elements['extended-activities'].value;
  extendedBudget.souvenirs = $extendedForm.elements['extended-souvenirs'].value;
  extendedBudget.reserve = $extendedForm.elements['extended-reserve'].value;
  data.extendedBudget = extendedBudget;
  populateExtendedBudget();
}

function getCurrentWeather(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.weatherbit.io/v2.0/current?&city=' + name + '&country=US&key=40a3d45da7724864bea69f3762cab669&units=i');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var $currentWeatherCard = document.querySelector('#current-weather-card');
    data.currentWeather.temp = xhr.response.data[0].temp + '°F';
    data.currentWeather.icon = 'images/icons/' + xhr.response.data[0].weather.icon + '.png';
    data.currentWeather.description = xhr.response.data[0].weather.description;
    if ($currentWeatherCard) {
      $currentWeatherCard.remove();
    }
    $dayTripContainer.prepend(createCurrentWeather());
  });
  xhr.send();
}

function getForecastWeather(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + name + '&country=US&key=40a3d45da7724864bea69f3762cab669&units=i&days=5');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var $forecastWeatherCard = document.querySelector('#forecast-weather-card');
    var forecastArr = [];
    for (var i = 0; i < xhr.response.data.length; i++) {
      var dailyForecast = {};
      dailyForecast.temp = xhr.response.data[i].temp;
      dailyForecast.date = xhr.response.data[i].datetime.slice(5).replace('-', '/');
      dailyForecast.icon = 'images/icons/' + xhr.response.data[i].weather.icon + '.png';
      forecastArr.push(dailyForecast);
    }
    data.forecastWeather = forecastArr;
    if ($forecastWeatherCard) {
      $forecastWeatherCard.remove();
    }
    $extendedTripContainer.prepend(createForecastWeather());
  });
  xhr.send();
}

function createCurrentWeather() {

  /*
<div class="column-full">
  <div class="column-full justify-center">
    <h3 class="mb-none">Irvine, CA</h3>
  </div>
  <div class="column-full justify-center">
    <p class="rm-margin">Wednesday, September 22</p>
  </div>
</div>
<div class="column-half justify-center">
  <img src="images/icons/a01d.png" alt="weather-icon">
</div>
<div class="column-half">
  <div class="column-full">
    <h1 class="degrees rm-margin justify-center">64&deg;F</h1>
  </div>
  <div class="column-full justify-center">
    <p class="rm-margin">Few Clouds</p>
  </div>
</div>
*/

  var $currentWeatherRow = document.createElement('div');
  var $cityDateColumn = document.createElement('div');
  var $headerColumn = document.createElement('div');
  var $cityHeader = document.createElement('h3');
  var $dateColumn = document.createElement('div');
  var $dateParagraph = document.createElement('p');
  var $iconColumn = document.createElement('div');
  var $icon = document.createElement('img');
  var $tempDescriptionColumn = document.createElement('div');
  var $tempColumn = document.createElement('div');
  var $tempHeader = document.createElement('h1');
  var $descriptionColumn = document.createElement('div');
  var $descriptionParagraph = document.createElement('p');

  $currentWeatherRow.className = 'row card-sky';
  $currentWeatherRow.setAttribute('id', 'current-weather-card');
  $cityDateColumn.className = 'column-full';
  $headerColumn.className = 'column-full justify-center';
  $cityHeader.className = 'mb-zero';
  $cityHeader.textContent = data.dayBudget.destination;
  $dateColumn.className = 'column-full justify-center';
  $dateParagraph.className = 'rm-margin';
  $dateParagraph.textContent = data.currentWeather.date;
  $iconColumn.className = 'column-half justify-center';
  $icon.setAttribute('src', data.currentWeather.icon);
  $icon.setAttribute('alt', 'weather-icon');
  $tempDescriptionColumn.className = 'column-half';
  $tempColumn.className = 'column-full';
  $tempHeader.className = 'degrees rm-margin justify-center';
  $tempHeader.textContent = data.currentWeather.temp;
  $descriptionColumn.className = 'column-full justify-center';
  $descriptionParagraph.className = 'rm-margin';
  $descriptionParagraph.textContent = data.currentWeather.description;

  $currentWeatherRow.append($cityDateColumn);
  $cityDateColumn.appendChild($headerColumn);
  $headerColumn.appendChild($cityHeader);
  $cityDateColumn.appendChild($dateColumn);
  $dateColumn.appendChild($dateParagraph);
  $currentWeatherRow.appendChild($iconColumn);
  $iconColumn.appendChild($icon);
  $currentWeatherRow.appendChild($tempDescriptionColumn);
  $tempDescriptionColumn.appendChild($tempColumn);
  $tempColumn.appendChild($tempHeader);
  $tempDescriptionColumn.appendChild($descriptionColumn);
  $descriptionColumn.appendChild($descriptionParagraph);

  return $currentWeatherRow;
}

function createForecastWeather() {
/*
  <div div class="row card-sky justify-center" >
    <div class="column-full justify-center">
      <h3 class="mb-half-rem">City, ST</h3>
    </div>
    <div class="row">
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="forecast-icon">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="forecast-icon">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="forecast-icon">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="forecast-icon">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="forecast-icon">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
    </div>
  </div >
*/
  var $forecastWeatherRow = document.createElement('div');
  var $forecastHeaderColumn = document.createElement('div');
  var $forecastCityHeader = document.createElement('h3');
  var $innerForecastRow = document.createElement('div');

  $forecastWeatherRow.className = 'row card-sky justify-center';
  $forecastWeatherRow.setAttribute('id', 'forecast-weather-card');
  $forecastHeaderColumn.className = 'column-full justify-center';
  $forecastCityHeader.className = 'mb-half-rem';
  $forecastCityHeader.textContent = data.extendedBudget.destination;
  $innerForecastRow.className = 'row text-center';

  for (var i = 0; i < data.forecastWeather.length; i++) {
    var $weatherInfoColumn = document.createElement('div');
    var $forecastIcon = document.createElement('img');
    var $forecastDate = document.createElement('p');
    var $forecastTemp = document.createElement('p');

    $weatherInfoColumn.className = 'column-fifth';
    $forecastIcon.setAttribute('src', data.forecastWeather[i].icon);
    $forecastIcon.setAttribute('alt', 'weather-icon');
    $forecastIcon.className = 'forecast-icon';
    $forecastDate.textContent = data.forecastWeather[i].date;
    $forecastTemp.textContent = data.forecastWeather[i].temp + '°F';

    $innerForecastRow.appendChild($weatherInfoColumn);
    $weatherInfoColumn.appendChild($forecastIcon);
    $weatherInfoColumn.appendChild($forecastDate);
    $weatherInfoColumn.appendChild($forecastTemp);
  }

  $extendedTripContainer.appendChild($forecastWeatherRow);
  $forecastWeatherRow.appendChild($forecastHeaderColumn);
  $forecastHeaderColumn.appendChild($forecastCityHeader);
  $forecastWeatherRow.appendChild($innerForecastRow);

  return $forecastWeatherRow;
}

function populateDayBudget() {
  $dayTransportBudget.textContent = data.dayBudget.transport;
  $dayFoodBudget.textContent = data.dayBudget.food;
  $dayActivitiesBudget.textContent = data.dayBudget.activities;
  $daySouvenirsBudget.textContent = data.dayBudget.souvenirs;
  $dayReserveBudget.textContent = data.dayBudget.reserve;
}

function populateExtendedBudget() {
  $extendedTransportBudget.textContent = data.extendedBudget.transport;
  $extendedLodgingBudget.textContent = data.extendedBudget.lodging;
  $extendedFoodBudget.textContent = data.extendedBudget.food;
  $extendedActivitiesBudget.textContent = data.extendedBudget.activities;
  $extendedSouvenirsBudget.textContent = data.extendedBudget.souvenirs;
  $extendedReserveBudget.textContent = data.extendedBudget.reserve;
}

function replaceDaySpent() {
  var daySpent = {};
  daySpent.transport = $daySpentTransportInput.value;
  daySpent.food = $daySpentFoodInput.value;
  daySpent.activities = $daySpentActivitiesInput.value;
  daySpent.souvenirs = $daySpentSouvenirsInput.value;
  daySpent.reserve = $daySpentReserveInput.value;
  data.daySpent = daySpent;

  if (!(daySpent.transport === '')) {
    $daySpentTransportInput.replaceWith($daySpentTransportInput.value);
  }
  if (!(daySpent.food === '')) {
    $daySpentFoodInput.replaceWith($daySpentFoodInput.value);
  }
  if (!(daySpent.activities === '')) {
    $daySpentActivitiesInput.replaceWith($daySpentActivitiesInput.value);
  }
  if (!(daySpent.souvenirs === '')) {
    $daySpentSouvenirsInput.replaceWith($daySpentSouvenirsInput.value);
  }
  if (!(daySpent.reserve === '')) {
    $daySpentReserveInput.replaceWith($daySpentReserveInput.value);
  }
}

function replaceExtendedSpent() {
  var extendedSpent = {};
  extendedSpent.transport = $extendedSpentTransportInput.value;
  extendedSpent.lodging = $extendedSpentLodgingInput.value;
  extendedSpent.food = $extendedSpentFoodInput.value;
  extendedSpent.activities = $extendedSpentActivitiesInput.value;
  extendedSpent.souvenirs = $extendedSpentSouvenirsInput.value;
  extendedSpent.reserve = $extendedSpentReserveInput.value;
  data.extendedSpent = extendedSpent;

  if (extendedSpent.transport !== '') {
    $extendedSpentTransportInput.replaceWith($extendedSpentTransportInput.value);
  }
  if (!(extendedSpent.lodging === '')) {
    $extendedSpentLodgingInput.replaceWith($extendedSpentLodgingInput.value);
  }
  if (!(extendedSpent.food === '')) {
    $extendedSpentFoodInput.replaceWith($extendedSpentFoodInput.value);
  }
  if (!(extendedSpent.activities === '')) {
    $extendedSpentActivitiesInput.replaceWith($extendedSpentActivitiesInput.value);
  }
  if (!(extendedSpent.souvenirs === '')) {
    $extendedSpentSouvenirsInput.replaceWith($extendedSpentSouvenirsInput.value);
  }
  if (!(extendedSpent.reserve === '')) {
    $extendedSpentReserveInput.replaceWith($extendedSpentReserveInput.value);
  }
}

function populateDaySpent() {
  if (data.daySpent.transport !== '') {
    $daySpentTransportInput.replaceWith(data.daySpent.transport);
  }
  if (data.daySpent.food !== '') {
    $daySpentFoodInput.replaceWith(data.daySpent.food);
  }
  if (data.daySpent.activities !== '') {
    $daySpentActivitiesInput.replaceWith(data.daySpent.activities);
  }
  if (data.daySpent.souvenirs !== '') {
    $daySpentSouvenirsInput.replaceWith(data.daySpent.souvenirs);
  }
  if (data.daySpent.reserve !== '') {
    $daySpentReserveInput.replaceWith(data.daySpent.reserve);
  }
}

function populateExtendedSpent() {
  if (data.extendedSpent.transport !== '') {
    $extendedSpentTransportInput.replaceWith(data.extendedSpent.transport);
  }
  if (data.extendedSpent.lodging !== '') {
    $extendedSpentLodgingInput.replaceWith(data.extendedSpent.lodging);
  }
  if (data.extendedSpent.food !== '') {
    $extendedSpentFoodInput.replaceWith(data.extendedSpent.food);
  }
  if (data.extendedSpent.activities !== '') {
    $extendedSpentActivitiesInput.replaceWith(data.extendedSpent.activities);
  }
  if (data.extendedSpent.souvenirs !== '') {
    $extendedSpentSouvenirsInput.replaceWith(data.extendedSpent.souvenirs);
  }
  if (data.extendedSpent.reserve !== '') {
    $extendedSpentReserveInput.replaceWith(data.extendedSpent.reserve);
  }
}

function handleDaySpentForm(event) {
  event.preventDefault();
  replaceDaySpent();
}

function handleExtendedSpentForm(event) {
  event.preventDefault();
  replaceExtendedSpent();
}

function switchView(string) {
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].dataset.view === string) {
      $view[i].classList.remove('hidden');
      data.view = $view[i].dataset.view;
    } else {
      $view[i].classList.add('hidden');
    }
  }
}

function handleSwap(event) {
  var currentView = event.target.getAttribute('data-view');
  data.view = currentView;
  switchView(currentView);
}

function handleNavDayPlanner(event) {
  event.preventDefault();
  getCurrentWeather(data.dayBudget.destination);
  populateDayBudget();
  populateDaySpent();
  switchView('day-summary');
}

function handleNavExtendedPlanner(event) {
  event.preventDefault();
  getForecastWeather(data.extendedBudget.destination);
  populateExtendedBudget();
  populateExtendedSpent();
  switchView('extended-summary');
}

$home.addEventListener('submit', handleTripSelection);
$dayForm.addEventListener('submit', handleDayForm);
$extendedForm.addEventListener('submit', handleExtendedForm);
$tripTypeButton.addEventListener('click', handleSwap);
$daySummaryButton.addEventListener('click', handleSwap);
$extendedSummaryButton.addEventListener('click', handleSwap);
$dayPlanner.addEventListener('click', handleNavDayPlanner);
$extendedPlanner.addEventListener('click', handleNavExtendedPlanner);
$daySpentForm.addEventListener('submit', handleDaySpentForm);
$extendedSpentForm.addEventListener('submit', handleExtendedSpentForm);
