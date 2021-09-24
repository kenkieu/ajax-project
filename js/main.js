var $home = document.querySelector('#home');
var $dayForm = document.querySelector('#day-form');
var $dayTripContainer = document.querySelector('#day-summary');
var $dayTransportBudget = document.querySelector('#day-transport-budget');
var $dayFoodBudget = document.querySelector('#day-food-budget');
var $dayActivitiesBudget = document.querySelector('#day-activities-budget');
var $daySouvenirsBudget = document.querySelector('#day-souvenirs-budget');
var $dayReserveBudget = document.querySelector('#day-reserve-budget');
var $extendedForm = document.querySelector('#extended-form');
var $extendedTripContainer = document.querySelector('#extended-summary');
var $extendedTransportBudget = document.querySelector('#extended-transport-budget');
var $extendedLodgingBudget = document.querySelector('#extended-lodging-budget');
var $extendedFoodBudget = document.querySelector('#extended-food-budget');
var $extendedActivitiesBudget = document.querySelector('#extended-activities-budget');
var $extendedSouvenirsBudget = document.querySelector('#extended-souvenirs-budget');
var $extendedReserveBudget = document.querySelector('#extended-reserve-budget');
var $view = document.querySelectorAll('.view');
var $daySummaryButton = document.querySelector('.day-summary-btn');
var $extendedSummaryButton = document.querySelector('.extended-summary-btn');
var $tripSelect = document.querySelector('#trip-type');
var $tripTypeButton = document.querySelector('.trip-type-button');
var $dayPlanner = document.querySelector('#day-planner');
var $extendedPlanner = document.querySelector('#extended-planner');

var $dayRowTransport = document.querySelector('#day-row-transport');

function handleDayForm(event) {
  event.preventDefault();
  var dayBudget = {};
  dayBudget.destination = $dayForm.elements['day-destination'].value;
  dayBudget.transport = $dayForm.elements['day-transport'].value;
  dayBudget.food = $dayForm.elements['day-food'].value;
  dayBudget.activities = $dayForm.elements['day-activities'].value;
  dayBudget.souvenirs = $dayForm.elements['day-souvenirs'].value;
  dayBudget.reserve = $dayForm.elements['day-reserve'].value;
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
  $currentWeatherRow.className = 'row card-sky';
  $currentWeatherRow.setAttribute('id', 'current-weather-card');

  var $cityDateColumn = document.createElement('div');
  $cityDateColumn.className = 'column-full';

  var $headerColumn = document.createElement('div');
  $headerColumn.className = 'column-full justify-center';

  var $cityHeader = document.createElement('h3');
  $cityHeader.className = 'mb-zero';
  $cityHeader.textContent = data.dayBudget.destination;

  var $dateColumn = document.createElement('div');
  $dateColumn.className = 'column-full justify-center';

  var $dateParagraph = document.createElement('p');
  $dateParagraph.className = 'rm-margin';
  $dateParagraph.textContent = data.currentWeather.date;

  var $iconColumn = document.createElement('div');
  $iconColumn.className = 'column-half justify-center';

  var $icon = document.createElement('img');
  $icon.setAttribute('src', data.currentWeather.icon);
  $icon.setAttribute('alt', 'weather-icon');

  var $tempDescriptionColumn = document.createElement('div');
  $tempDescriptionColumn.className = 'column-half';

  var $tempColumn = document.createElement('div');
  $tempColumn.className = 'column-full';

  var $tempHeader = document.createElement('h1');
  $tempHeader.className = 'degrees rm-margin justify-center';
  $tempHeader.textContent = data.currentWeather.temp;

  var $descriptionColumn = document.createElement('div');
  $descriptionColumn.className = 'column-full justify-center';

  var $descriptionParagraph = document.createElement('p');
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
  $forecastWeatherRow.className = 'row card-sky justify-center';
  $forecastWeatherRow.setAttribute('id', 'forecast-weather-card');

  var $forecastHeaderColumn = document.createElement('div');
  $forecastHeaderColumn.className = 'column-full justify-center';

  var $forecastCityHeader = document.createElement('h3');
  $forecastCityHeader.className = 'mb-half-rem';
  $forecastCityHeader.textContent = data.extendedBudget.destination;

  var $innerForecastRow = document.createElement('div');
  $innerForecastRow.className = 'row text-center';

  for (var i = 0; i < data.forecastWeather.length; i++) {
    var $weatherInfoColumn = document.createElement('div');
    $weatherInfoColumn.className = 'column-fifth';

    var $forecastIcon = document.createElement('img');
    $forecastIcon.setAttribute('src', data.forecastWeather[i].icon);
    $forecastIcon.setAttribute('alt', 'weather-icon');
    $forecastIcon.className = 'forecast-icon';

    var $forecastDate = document.createElement('p');
    $forecastDate.textContent = data.forecastWeather[i].date;

    var $forecastTemp = document.createElement('p');
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

function handleTripSelection(event) {
  event.preventDefault();
  switchView($tripSelect.value);
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
  switchView('day-summary');

}

function handleNavExtendedPlanner(event) {
  event.preventDefault();
  getForecastWeather(data.extendedBudget.destination);
  populateExtendedBudget();
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
