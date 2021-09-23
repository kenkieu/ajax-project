var $home = document.querySelector('#home');
var $dayForm = document.querySelector('#day-form');
var $dayTripContainer = document.querySelector('#day-summary');
var $transportBudget = document.querySelector('#transport-budget');
var $foodBudget = document.querySelector('#food-budget');
var $activitiesBudget = document.querySelector('#activities-budget');
var $souvenirsBudget = document.querySelector('#souvenirs-budget');
var $reserveBudget = document.querySelector('#reserve-budget');
var $view = document.querySelectorAll('.view');
var $daySummaryButton = document.querySelector('.day-summary-btn');
var $tripSelect = document.querySelector('#trip-type');
var $tripTypeButton = document.querySelector('.trip-type-button');
var $navPlanner = document.querySelector('#nav-planner');

function handleDayForm(event) {
  event.preventDefault();
  var dayBudget = {};
  data.currentWeather.destination = $dayForm.elements.destination.value;
  getCurrentWeather(data.currentWeather.destination);
  dayBudget.transport = $dayForm.elements.transport.value;
  dayBudget.food = $dayForm.elements.food.value;
  dayBudget.activities = $dayForm.elements.activities.value;
  dayBudget.souvenirs = $dayForm.elements.souvenirs.value;
  dayBudget.reserve = $dayForm.elements.reserve.value;
  data.dayBudget = dayBudget;
  populateDayBudget();
}

function getCurrentWeather(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.weatherbit.io/v2.0/current?&city=' + name + '&country=US&key=40a3d45da7724864bea69f3762cab669&units=i');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.currentWeather.temp = xhr.response.data[0].temp + '°F';
    data.currentWeather.icon = 'images/icons/' + xhr.response.data[0].weather.icon + '.png';
    data.currentWeather.description = xhr.response.data[0].weather.description;
    $dayTripContainer.prepend(createCurrentWeather());
  });
  xhr.send();
}

function createCurrentWeather() {
  var $currentWeatherRow = document.createElement('div');
  $currentWeatherRow.className = 'row card-sky';

  var $cityDateColumn = document.createElement('div');
  $cityDateColumn.className = 'column-full';

  var $headerColumn = document.createElement('div');
  $headerColumn.className = 'column-full justify-center';

  var $cityHeader = document.createElement('h3');
  $cityHeader.className = 'mb-zero';
  $cityHeader.textContent = data.currentWeather.destination;

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

function populateDayBudget() {
  $transportBudget.textContent = data.dayBudget.transport;
  $foodBudget.textContent = data.dayBudget.food;
  $activitiesBudget.textContent = data.dayBudget.activities;
  $souvenirsBudget.textContent = data.dayBudget.souvenirs;
  $reserveBudget.textContent = data.dayBudget.reserve;
}

// function populateExtendedBudget() {
//   $transportBudget.textContent = data.extendedBudget.transport;
//   $lodgingBudget.textContent = data.extendedBudget.lodging;
//   $foodBudget.textContent = data.extendedBudget.food;
//   $activitiesBudget.textContent = data.extendedBudget.activities;
//   $souvenirsBudget.textContent = data.extendedBudget.souvenirs;
//   $reserveBudget.textContent = data.extendedBudget.reserve;
// }

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
  getCurrentWeather(data.currentWeather.destination);
  populateDayBudget();
  switchView('day-summary');
}

$home.addEventListener('submit', handleTripSelection);
$dayForm.addEventListener('submit', handleDayForm);
$tripTypeButton.addEventListener('click', handleSwap);
$daySummaryButton.addEventListener('click', handleSwap);
$navPlanner.addEventListener('click', handleNavDayPlanner);
