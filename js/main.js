const $home = document.querySelector('#home');
const $tripSelect = document.querySelector('#trip-type');
const $tripTypeButton = document.querySelector('.trip-type-button');
const $logoAnchor = document.querySelector('#logo');

const $dayForm = document.querySelector('#day-form');
const $dayTripContainer = document.querySelector('#day-summary');
const $dayTransportBudget = document.querySelector('#day-transport-budget');
const $dayFoodBudget = document.querySelector('#day-food-budget');
const $dayActivitiesBudget = document.querySelector('#day-activities-budget');
const $daySouvenirsBudget = document.querySelector('#day-souvenirs-budget');
const $dayReserveBudget = document.querySelector('#day-reserve-budget');
const $dayPlanner = document.querySelector('#day-planner');
const $daySpentForm = document.querySelector('#day-spent-form');
const $daySpentTransportInput = document.querySelector(
  '#day-spent-transport-input'
);
const $daySpentFoodInput = document.querySelector('#day-spent-food-input');
const $daySpentActivitiesInput = document.querySelector(
  '#day-spent-activities-input'
);
const $daySpentSouvenirsInput = document.querySelector(
  '#day-spent-souvenirs-input'
);
const $daySpentReserveInput = document.querySelector(
  '#day-spent-reserve-input'
);
const $dayDeleteLink = document.querySelector('#day-delete-link');
const $dayTransportSpent = document.querySelector('#day-transport-spent');
const $dayFoodSpent = document.querySelector('#day-food-spent');
const $dayActivitiesSpent = document.querySelector('#day-activities-spent');
const $daySouvenirsSpent = document.querySelector('#day-souvenirs-spent');
const $dayReserveSpent = document.querySelector('#day-reserve-spent');

const $extendedForm = $('#extended-form');

const $extendedTripContainer = document.querySelector('#extended-summary');
const $extendedTransportBudget = document.querySelector(
  '#extended-transport-budget'
);
const $extendedLodgingBudget = document.querySelector(
  '#extended-lodging-budget'
);
const $extendedFoodBudget = document.querySelector('#extended-food-budget');
const $extendedActivitiesBudget = document.querySelector(
  '#extended-activities-budget'
);
const $extendedSouvenirsBudget = document.querySelector(
  '#extended-souvenirs-budget'
);
const $extendedReserveBudget = document.querySelector(
  '#extended-reserve-budget'
);
const $extendedSpentTransportInput = document.querySelector(
  '#extended-spent-transport-input'
);
const $extendedSpentLodgingInput = document.querySelector(
  '#extended-spent-lodging-input'
);
const $extendedSpentFoodInput = document.querySelector(
  '#extended-spent-food-input'
);
const $extendedSpentActivitiesInput = document.querySelector(
  '#extended-spent-activities-input'
);
const $extendedSpentSouvenirsInput = document.querySelector(
  '#extended-spent-souvenirs-input'
);
const $extendedSpentReserveInput = document.querySelector(
  '#extended-spent-reserve-input'
);
const $extendedPlanner = document.querySelector('#extended-planner');
const $extendedSpentForm = document.querySelector('#extended-spent-form');
const $extendedDeleteLink = document.querySelector('#extended-delete-link');
const $extendedTransportSpent = document.querySelector(
  '#extended-transport-spent'
);
const $extendedLodgingSpent = document.querySelector('#extended-lodging-spent');
const $extendedFoodSpent = document.querySelector('#extended-food-spent');
const $extendedActivitiesSpent = document.querySelector(
  '#extended-activities-spent'
);
const $extendedSouvenirsSpent = document.querySelector(
  '#extended-souvenirs-spent'
);
const $extendedReserveSpent = document.querySelector('#extended-reserve-spent');

const $editDaySummaryLink = document.querySelector('#edit-day-summary-link');
const $editExtendedSummaryLink = document.querySelector(
  '#edit-extended-summary-link'
);
const $editDayForm = document.querySelector('#edit-day-form');
const $editExtendedForm = document.querySelector('#edit-extended-form');
const $editDayBudgetTransportInput = document.querySelector(
  '#edit-day-budget-transport-input'
);
const $editDayBudgetFoodInput = document.querySelector(
  '#edit-day-budget-food-input'
);
const $editDayBudgetActivitiesInput = document.querySelector(
  '#edit-day-budget-activities-input'
);
const $editDayBudgetSouvenirsInput = document.querySelector(
  '#edit-day-budget-souvenirs-input'
);
const $editDayBudgetReserveInput = document.querySelector(
  '#edit-day-budget-reserve-input'
);
const $editDaySpentTransportInput = document.querySelector(
  '#edit-day-spent-transport-input'
);
const $editDaySpentFoodInput = document.querySelector(
  '#edit-day-spent-food-input'
);
const $editDaySpentActivitiesInput = document.querySelector(
  '#edit-day-spent-activities-input'
);
const $editDaySpentSouvenirsInput = document.querySelector(
  '#edit-day-spent-souvenirs-input'
);
const $editDaySpentReserveInput = document.querySelector(
  '#edit-day-spent-reserve-input'
);
const $editExtendedBudgetTransportInput = document.querySelector(
  '#edit-extended-budget-transport-input'
);
const $editExtendedBudgetLodgingInput = document.querySelector(
  '#edit-extended-budget-lodging-input'
);
const $editExtendedBudgetFoodInput = document.querySelector(
  '#edit-extended-budget-food-input'
);
const $editExtendedBudgetActivitiesInput = document.querySelector(
  '#edit-extended-budget-activities-input'
);
const $editExtendedBudgetSouvenirsInput = document.querySelector(
  '#edit-extended-budget-souvenirs-input'
);
const $editExtendedBudgetReserveInput = document.querySelector(
  '#edit-extended-budget-reserve-input'
);
const $editExtendedSpentTransportInput = document.querySelector(
  '#edit-extended-spent-transport-input'
);
const $editExtendedSpentLodgingInput = document.querySelector(
  '#edit-extended-spent-lodging-input'
);
const $editExtendedSpentFoodInput = document.querySelector(
  '#edit-extended-spent-food-input'
);
const $editExtendedSpentActivitiesInput = document.querySelector(
  '#edit-extended-spent-activities-input'
);
const $editExtendedSpentSouvenirsInput = document.querySelector(
  '#edit-extended-spent-souvenirs-input'
);
const $editExtendedSpentReserveInput = document.querySelector(
  '#edit-extended-spent-reserve-input'
);

const $modalContainer = document.querySelector('#modal-container');
const $cancelModalLink = document.querySelector('#cancel-modal-link');
const $deleteModalLink = document.querySelector('#delete-modal-link');

function handleTripSelection(event) {
  event.preventDefault();
  switchView($tripSelect.value);
}

function handleDayForm(event) {
  event.preventDefault();

  const dayBudget = {};
  dayBudget.destination = $dayForm.elements['day-destination'].value;
  dayBudget.transport = $dayForm.elements['day-budget-transport'].value;
  dayBudget.food = $dayForm.elements['day-budget-food'].value;
  dayBudget.activities = $dayForm.elements['day-budget-activities'].value;
  dayBudget.souvenirs = $dayForm.elements['day-budget-souvenirs'].value;
  dayBudget.reserve = $dayForm.elements['day-budget-reserve'].value;
  data.dayBudget = dayBudget;

  const $daySpentTD = document.querySelectorAll('.day-spent-td');
  const $daySpentInput = document.querySelectorAll('.day-spent-input');

  for (const key in data.daySpent) {
    if (data.daySpent[key] === '') {
      for (let i = 0; i < $daySpentTD.length; i++) {
        if (
          $daySpentTD[i].getAttribute('id').includes(key) &&
          $daySpentInput[i].getAttribute('id').includes(key)
        ) {
          $daySpentTD[i].textContent = '';
          $daySpentInput[i].value = '';
          $daySpentTD[i].appendChild($daySpentInput[i]);
        }
      }
    }
  }
  getCurrentWeather(data.dayBudget.destination);
  populateDayBudget();
  defaultDayBudgetValues();
  switchView('day-summary');
}

function handleExtendedForm(event) {
  event.preventDefault();
  const extendedBudget = {};

  getForecastWeather($extendedForm.elements['extended-destination'].value);
  extendedBudget.destination =
    $extendedForm.elements['extended-destination'].value;
  extendedBudget.transport = $extendedForm.elements['extended-transport'].value;
  extendedBudget.lodging = $extendedForm.elements['extended-lodging'].value;
  extendedBudget.food = $extendedForm.elements['extended-food'].value;
  extendedBudget.activities =
    $extendedForm.elements['extended-activities'].value;
  extendedBudget.souvenirs = $extendedForm.elements['extended-souvenirs'].value;
  extendedBudget.reserve = $extendedForm.elements['extended-reserve'].value;
  data.extendedBudget = extendedBudget;

  const $extendedSpentTD = document.querySelectorAll('.extended-spent-td');
  const $extendedSpentInput = document.querySelectorAll('.extended-spent-input');
  for (const key in data.extendedSpent) {
    if (data.extendedSpent[key] === '') {
      for (let i = 0; i < $extendedSpentTD.length; i++) {
        if (
          $extendedSpentTD[i].getAttribute('id').includes(key) &&
          $extendedSpentInput[i].getAttribute('id').includes(key)
        ) {
          $extendedSpentTD[i].textContent = '';
          $extendedSpentInput[i].value = '';
          $extendedSpentTD[i].appendChild($extendedSpentInput[i]);
        }
      }
    }
  }

  populateExtendedBudget();
  defaultExtendedBudgetValues();
  switchView('extended-summary');
}

function getCurrentWeather(name) {
  const $daySpinner = document.querySelector('#day-spinner');
  const $currentWeatherCard = document.querySelector('#current-weather-card');
  $daySpinner.classList.remove('hidden');
  fetch(`https://api.weatherbit.io/v2.0/current?&city=${name}&country=US&key=40a3d45da7724864bea69f3762cab669&units=i`)
    .then(res => res.json())
    .then(result => {
      const { data: dataset } = result;
      const $weatherError = document.querySelector('#weather-error');
      $daySpinner.classList.add('hidden');
      data.currentWeather.location = dataset[0].city_name + ',' + dataset[0].state_code;
      data.currentWeather.temp = `${dataset[0].temp}°F`;
      data.currentWeather.icon = `images/icons/${dataset[0].weather.icon}.png`;
      data.currentWeather.description = dataset[0].weather.description;
      if ($currentWeatherCard) {
        $currentWeatherCard.remove();
      }
      if ($weatherError) {
        $weatherError.remove();
      }
      $dayTripContainer.prepend(createCurrentWeather());
    })
    .catch(err => {
      if (err) {
        const $weatherError = document.querySelector('#weather-error');
        if ($currentWeatherCard) {
          $currentWeatherCard.remove();
        }
        if ($weatherError) {
          $weatherError.remove();
        }
        $daySpinner.classList.add('hidden');
        $dayTripContainer.prepend(noContentError());
      }
    });
}

function noContentError() {
  const $cardSky = document.createElement('div');
  $cardSky.className = 'row card-sky';
  $cardSky.setAttribute('id', 'weather-error');
  const $errorColumn = document.createElement('div');
  $errorColumn.className = 'column-full justify-center align-center';
  const $errorMessage = document.createElement('h3');
  $errorMessage.className = 'error-message';
  $errorMessage.textContent =
    'Oops, something went wrong! Please verify that a valid City, State was entered.';
  $cardSky.appendChild($errorColumn);
  $errorColumn.appendChild($errorMessage);
  return $cardSky;
}

function getForecastWeather(name) {
  const $forecastWeatherCard = document.querySelector('#forecast-weather-card');
  const $weatherError = document.querySelector('#weather-error');
  const $extendedSpinner = document.querySelector('#extended-spinner');
  $extendedSpinner.classList.remove('hidden');

  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&country=US&key=40a3d45da7724864bea69f3762cab669&units=i&days=5`)
    .then(response => response.json()
      .then(result => {
        const { data: dataset } = result;
        $extendedSpinner.classList.add('hidden');
        const forecastArr = [];
        for (let i = 0; i < dataset.length; i++) {
          const dailyForecast = {};
          dailyForecast.location = result.city_name + ', ' + result.state_code;
          dailyForecast.temp = dataset[i].temp;
          dailyForecast.date = dataset[i].datetime
            .slice(5)
            .replace('-', '/');
          dailyForecast.icon = `images/icons/${dataset[i].weather.icon}.png`;
          forecastArr.push(dailyForecast);
        }
        data.forecastWeather = forecastArr;
        if ($weatherError) {
          $weatherError.remove();
        }
        if ($forecastWeatherCard) {
          $forecastWeatherCard.remove();
        }
        $extendedTripContainer.prepend(createForecastWeather());
      }))
    .catch(err => {
      if (err) {
        $extendedSpinner.classList.add('hidden');
        if ($weatherError) {
          $weatherError.remove();
        }
        if ($forecastWeatherCard) {
          $forecastWeatherCard.remove();
        }
        $extendedTripContainer.prepend(noContentError());
      }
    });
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
  const $currentWeatherRow = document.createElement('div');
  const $cityDateColumn = document.createElement('div');
  const $headerColumn = document.createElement('div');
  const $cityHeader = document.createElement('h3');
  const $dateColumn = document.createElement('div');
  const $dateParagraph = document.createElement('p');
  const $iconColumn = document.createElement('div');
  const $icon = document.createElement('img');
  const $tempDescriptionColumn = document.createElement('div');
  const $tempColumn = document.createElement('div');
  const $tempHeader = document.createElement('h1');
  const $descriptionColumn = document.createElement('div');
  const $descriptionParagraph = document.createElement('p');

  $currentWeatherRow.className = 'row card-sky';
  $currentWeatherRow.setAttribute('id', 'current-weather-card');
  $cityDateColumn.className = 'column-full';
  $headerColumn.className = 'column-full justify-center';
  $cityHeader.className = 'mb-zero font-scale';
  $cityHeader.textContent = data.currentWeather.location;
  $dateColumn.className = 'column-full justify-center';
  $dateParagraph.className = 'rm-margin';
  $dateParagraph.textContent = data.currentWeather.date;
  $iconColumn.className = 'column-half justify-center';
  $icon.setAttribute('src', data.currentWeather.icon);
  $icon.setAttribute('alt', 'weather-icon');
  $tempDescriptionColumn.className =
    'column-half align-content-center flex-wrap';
  $tempColumn.className = 'column-full';
  $tempHeader.className = 'degrees rm-margin justify-center';
  $tempHeader.textContent = data.currentWeather.temp;
  $descriptionColumn.className = 'column-full justify-center';
  $descriptionParagraph.className = 'rm-margin';
  $descriptionParagraph.textContent = data.currentWeather.description;

  $currentWeatherRow.appendChild($cityDateColumn);
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
        <img src="images/icons/a01d.png" alt="weather-icon" class="w-100">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="w-100">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="w-100">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="w-100">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
      <div class="column-fifth">
        <img src="images/icons/a01d.png" alt="weather-icon" class="w-100">
        <p class="rm-margin">09/23</p>
        <p>63.5&deg;F</p>
      </div>
    </div>
  </div >
*/
  const $forecastWeatherRow = document.createElement('div');
  const $forecastHeaderColumn = document.createElement('div');
  const $forecastCityHeader = document.createElement('h3');
  const $innerForecastRow = document.createElement('div');
  const [city] = data.forecastWeather;

  $forecastWeatherRow.className = 'row card-sky justify-center';
  $forecastWeatherRow.setAttribute('id', 'forecast-weather-card');
  $forecastHeaderColumn.className = 'column-full justify-center';
  $forecastCityHeader.className = 'mb-zero font-scale';
  $forecastCityHeader.textContent = city.location;
  $innerForecastRow.className = 'row text-center';

  for (let i = 0; i < data.forecastWeather.length; i++) {
    const $weatherInfoColumn = document.createElement('div');
    const $forecastIcon = document.createElement('img');
    const $forecastDate = document.createElement('p');
    const $forecastTemp = document.createElement('p');

    $weatherInfoColumn.className = 'column-fifth';
    $forecastIcon.setAttribute('src', data.forecastWeather[i].icon);
    $forecastIcon.setAttribute('alt', 'weather-icon');
    $forecastIcon.className = 'w-100';
    $forecastDate.className = 'forecast-date';
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
  const daySpent = {};
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
  const extendedSpent = {};
  extendedSpent.transport = $extendedSpentTransportInput.value;
  extendedSpent.lodging = $extendedSpentLodgingInput.value;
  extendedSpent.food = $extendedSpentFoodInput.value;
  extendedSpent.activities = $extendedSpentActivitiesInput.value;
  extendedSpent.souvenirs = $extendedSpentSouvenirsInput.value;
  extendedSpent.reserve = $extendedSpentReserveInput.value;
  data.extendedSpent = extendedSpent;

  if (extendedSpent.transport !== '') {
    $extendedSpentTransportInput.replaceWith(
      $extendedSpentTransportInput.value
    );
  }
  if (!(extendedSpent.lodging === '')) {
    $extendedSpentLodgingInput.replaceWith($extendedSpentLodgingInput.value);
  }
  if (!(extendedSpent.food === '')) {
    $extendedSpentFoodInput.replaceWith($extendedSpentFoodInput.value);
  }
  if (!(extendedSpent.activities === '')) {
    $extendedSpentActivitiesInput.replaceWith(
      $extendedSpentActivitiesInput.value
    );
  }
  if (!(extendedSpent.souvenirs === '')) {
    $extendedSpentSouvenirsInput.replaceWith(
      $extendedSpentSouvenirsInput.value
    );
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

function switchView(view) {
  const $view = document.querySelectorAll('.view');
  for (let i = 0; i < $view.length; i++) {
    if ($view[i].dataset.view === view) {
      $view[i].classList.remove('hidden');
      data.view = $view[i].dataset.view;
    } else {
      $view[i].classList.add('hidden');
    }
  }
}

function handleSwap(event) {
  const currentView = event.target.getAttribute('data-view');
  data.view = currentView;
  switchView(currentView);
}

function defaultDayBudgetValues() {
  const $dayBudgetDestination = document.querySelector('#day-budget-destination');
  const $dayBudgetTransport = document.querySelector('#day-budget-transport');
  const $dayBudgetFood = document.querySelector('#day-budget-food');
  const $dayBudgetActivities = document.querySelector('#day-budget-activities');
  const $dayBudgetSouvenirs = document.querySelector('#day-budget-souvenirs');
  const $dayBudgetReserve = document.querySelector('#day-budget-reserve');
  $dayBudgetDestination.value = '';
  $dayBudgetTransport.value = '';
  $dayBudgetFood.value = '';
  $dayBudgetActivities.value = '';
  $dayBudgetSouvenirs.value = '';
  $dayBudgetReserve.value = '';
}

function defaultExtendedBudgetValues() {
  const $extendedBudgetDestination = document.querySelector(
    '#extended-destination'
  );
  const $extendedBudgetTransport = document.querySelector('#extended-transport');
  const $extendedBudgetLodging = document.querySelector('#extended-lodging');
  const $extendedBudgetFood = document.querySelector('#extended-food');
  const $extendedBudgetActivities = document.querySelector(
    '#extended-activities'
  );
  const $extendedBudgetSouvenirs = document.querySelector('#extended-souvenirs');
  const $extendedBudgetReserve = document.querySelector('#extended-reserve');
  $extendedBudgetDestination.value = '';
  $extendedBudgetLodging.value = '';
  $extendedBudgetTransport.value = '';
  $extendedBudgetFood.value = '';
  $extendedBudgetActivities.value = '';
  $extendedBudgetSouvenirs.value = '';
  $extendedBudgetReserve.value = '';
}

function handleNavDayPlanner(event) {
  event.preventDefault();
  if (!data.dayBudget) {
    switchView('day-form');
  } else {
    getCurrentWeather(data.dayBudget.destination);
    populateDayBudget();
    populateDaySpent();
    switchView('day-summary');
  }
}

function handleNavExtendedPlanner(event) {
  event.preventDefault();
  if (!data.extendedBudget) {
    const $extendedBudgetDestination = document.querySelector(
      '#extended-destination'
    );
    const $extendedBudgetTransport = document.querySelector(
      '#extended-transport'
    );
    const $extendedBudgetLodging = document.querySelector('#extended-lodging');
    const $extendedBudgetFood = document.querySelector('#extended-food');
    const $extendedBudgetActivities = document.querySelector(
      '#extended-activities'
    );
    const $extendedBudgetSouvenirs = document.querySelector(
      '#extended-souvenirs'
    );
    const $extendedBudgetReserve = document.querySelector('#extended-reserve');
    $extendedBudgetDestination.value = '';
    $extendedBudgetTransport.value = '';
    $extendedBudgetLodging.value = '';
    $extendedBudgetFood.value = '';
    $extendedBudgetActivities.value = '';
    $extendedBudgetSouvenirs.value = '';
    $extendedBudgetReserve.value = '';
    switchView('extended-form');
  } else {
    getForecastWeather(data.extendedBudget.destination);
    populateExtendedBudget();
    populateExtendedSpent();
    switchView('extended-summary');
  }
}

function handleEditDaySummaryLink(event) {
  event.preventDefault();
  populateEditDaySummary();
  switchView('edit-day-summary');
}

function handleEditExtendedSummaryLink(event) {
  event.preventDefault();
  populateEditExtendedSummary();
  switchView('edit-extended-summary');
}

function populateEditDaySummary() {
  const db = data.dayBudget;
  const ds = data.daySpent;

  $editDayBudgetTransportInput.value = db.transport;
  $editDayBudgetFoodInput.value = db.food;
  $editDayBudgetActivitiesInput.value = db.activities;
  $editDayBudgetSouvenirsInput.value = db.souvenirs;
  $editDayBudgetReserveInput.value = db.reserve;

  if (ds.transport !== '') {
    $editDaySpentTransportInput.value = ds.transport;
  }
  if (ds.food !== '') {
    $editDaySpentFoodInput.value = ds.food;
  }
  if (ds.activities !== '') {
    $editDaySpentActivitiesInput.value = ds.activities;
  }
  if (ds.souvenirs !== '') {
    $editDaySpentSouvenirsInput.value = ds.souvenirs;
  }
  if (ds.reserve !== '') {
    $editDaySpentReserveInput.value = ds.reserve;
  }
}

function populateEditExtendedSummary() {
  $editExtendedBudgetTransportInput.value = data.extendedBudget.transport;
  $editExtendedBudgetLodgingInput.value = data.extendedBudget.lodging;
  $editExtendedBudgetFoodInput.value = data.extendedBudget.food;
  $editExtendedBudgetActivitiesInput.value = data.extendedBudget.activities;
  $editExtendedBudgetSouvenirsInput.value = data.extendedBudget.souvenirs;
  $editExtendedBudgetReserveInput.value = data.extendedBudget.reserve;

  if (data.extendedSpent.transport !== '') {
    $editExtendedSpentTransportInput.value = data.extendedSpent.transport;
  }
  if (data.extendedSpent.lodging !== '') {
    $editExtendedSpentLodgingInput.value = data.extendedSpent.lodging;
  }
  if (data.extendedSpent.food !== '') {
    $editExtendedSpentFoodInput.value = data.extendedSpent.food;
  }
  if (data.extendedSpent.activities !== '') {
    $editExtendedSpentActivitiesInput.value = data.extendedSpent.activities;
  }
  if (data.extendedSpent.souvenirs !== '') {
    $editExtendedSpentSouvenirsInput.value = data.extendedSpent.souvenirs;
  }
  if (data.extendedSpent.reserve !== '') {
    $editExtendedSpentReserveInput.value = data.extendedSpent.reserve;
  }
}

function editHelper(summaryInput, editInput) {
  summaryInput.textContent = editInput.value;
}

function updateDaySummary() {
  const db = data.dayBudget;
  const ds = data.daySpent;

  db.transport = $editDayBudgetTransportInput.value;
  db.food = $editDayBudgetFoodInput.value;
  db.activities = $editDayBudgetActivitiesInput.value;
  db.souvenirs = $editDayBudgetSouvenirsInput.value;
  db.reserve = $editDayBudgetReserveInput.value;

  editHelper($dayTransportBudget, $editDayBudgetTransportInput);
  editHelper($dayFoodBudget, $editDayBudgetFoodInput);
  editHelper($dayActivitiesBudget, $editDayBudgetActivitiesInput);
  editHelper($daySouvenirsBudget, $editDayBudgetSouvenirsInput);
  editHelper($dayReserveBudget, $editDayBudgetReserveInput);

  ds.transport = $editDaySpentTransportInput.value;
  $daySpentTransportInput.value = ds.transport;
  ds.food = $editDaySpentFoodInput.value;
  $daySpentFoodInput.value = ds.food;
  ds.activities = $editDaySpentActivitiesInput.value;
  $daySpentActivitiesInput.value = ds.activities;
  ds.souvenirs = $editDaySpentSouvenirsInput.value;
  $daySpentSouvenirsInput.value = ds.souvenirs;
  ds.reserve = $editDaySpentReserveInput.value;
  $daySpentReserveInput.value = ds.reserve;

  editHelper($dayTransportSpent, $editDaySpentTransportInput);
  editHelper($dayFoodSpent, $editDaySpentFoodInput);
  editHelper($dayActivitiesSpent, $editDaySpentActivitiesInput);
  editHelper($daySouvenirsSpent, $editDaySpentSouvenirsInput);
  editHelper($dayReserveSpent, $editDaySpentReserveInput);

  if ($editDaySpentTransportInput.value === '') {
    $dayTransportSpent.appendChild($daySpentTransportInput);
  }
  if ($editDaySpentFoodInput.value === '') {
    $dayFoodSpent.appendChild($daySpentFoodInput);
  }
  if ($editDaySpentActivitiesInput.value === '') {
    $dayActivitiesSpent.appendChild($daySpentActivitiesInput);
  }
  if ($editDaySpentSouvenirsInput.value === '') {
    $daySouvenirsSpent.appendChild($daySpentSouvenirsInput);
  }
  if ($editDaySpentReserveInput.value === '') {
    $dayReserveSpent.appendChild($daySpentReserveInput);
  }
}

function updateExtendedSummary() {
  const eb = data.extendedBudget;
  const es = data.extendedSpent;

  eb.transport = $editExtendedBudgetTransportInput.value;
  eb.lodging = $editExtendedBudgetLodgingInput.value;
  eb.food = $editExtendedBudgetFoodInput.value;
  eb.activities = $editExtendedBudgetActivitiesInput.value;
  eb.souvenirs = $editExtendedBudgetSouvenirsInput.value;
  eb.reserve = $editExtendedBudgetReserveInput.value;

  editHelper($extendedTransportBudget, $editExtendedBudgetTransportInput);
  editHelper($extendedLodgingBudget, $editExtendedBudgetLodgingInput);
  editHelper($extendedFoodBudget, $editExtendedBudgetFoodInput);
  editHelper($extendedActivitiesBudget, $editExtendedBudgetActivitiesInput);
  editHelper($extendedSouvenirsBudget, $editExtendedBudgetSouvenirsInput);
  editHelper($extendedReserveBudget, $editExtendedBudgetReserveInput);

  es.transport = $editExtendedSpentTransportInput.value;
  $extendedSpentTransportInput.value = es.transport;
  es.lodging = $editExtendedSpentLodgingInput.value;
  $extendedSpentLodgingInput.value = es.lodging;
  es.food = $editExtendedSpentFoodInput.value;
  $extendedSpentFoodInput.value = es.food;
  es.activities = $editExtendedSpentActivitiesInput.value;
  $extendedSpentActivitiesInput.value = es.activities;
  es.souvenirs = $editExtendedSpentSouvenirsInput.value;
  $extendedSpentSouvenirsInput.value = es.souvenirs;
  es.reserve = $editExtendedSpentReserveInput.value;
  $extendedSpentReserveInput.value = es.reserve;

  editHelper($extendedTransportSpent, $editExtendedSpentTransportInput);
  editHelper($extendedLodgingSpent, $editExtendedSpentLodgingInput);
  editHelper($extendedFoodSpent, $editExtendedSpentFoodInput);
  editHelper($extendedActivitiesSpent, $editExtendedSpentActivitiesInput);
  editHelper($extendedSouvenirsSpent, $editExtendedSpentSouvenirsInput);
  editHelper($extendedReserveSpent, $editExtendedSpentReserveInput);

  if ($editExtendedSpentTransportInput.value === '') {
    $extendedTransportSpent.appendChild($extendedSpentTransportInput);
  }
  if ($editExtendedSpentLodgingInput.value === '') {
    $extendedLodgingSpent.appendChild($extendedSpentLodgingInput);
  }
  if ($editExtendedSpentFoodInput.value === '') {
    $extendedFoodSpent.appendChild($extendedSpentFoodInput);
  }
  if ($editExtendedSpentActivitiesInput.value === '') {
    $extendedActivitiesSpent.appendChild($extendedSpentActivitiesInput);
  }
  if ($editExtendedSpentSouvenirsInput.value === '') {
    $extendedSouvenirsSpent.appendChild($extendedSpentSouvenirsInput);
  }
  if ($editExtendedSpentReserveInput.value === '') {
    $extendedReserveSpent.appendChild($extendedSpentReserveInput);
  }
}

function handleSubmitEditDayForm(event) {
  event.preventDefault();
  updateDaySummary();
  switchView('day-summary');
}

function handleSubmitEditExtendedForm(event) {
  event.preventDefault();
  updateExtendedSummary();
  switchView('extended-summary');
}

let modalOpen = false;

function handleModalOpen() {
  if (modalOpen === false) {
    $modalContainer.classList.remove('hidden');
    modalOpen = true;
  }
}

function handleHideModal() {
  if (modalOpen === true) {
    $modalContainer.classList.add('hidden');
    modalOpen = false;
  }
}

function handleDeleteEntry(event) {
  if (data.view === 'edit-day-summary') {
    deleteDayEntry();
  } else {
    deleteExtendedEntry();
  }
  handleHideModal();
  switchView('home');
}

function deleteDayEntry() {
  const defaultDaySpent = {
    transport: '',
    food: '',
    activities: '',
    souvenirs: '',
    reserve: ''
  };
  delete data.dayBudget;
  data.currentWeather = {};
  data.daySpent = defaultDaySpent;
}

function deleteExtendedEntry() {
  const defaultExtendedSpent = {
    transport: '',
    lodging: '',
    food: '',
    activities: '',
    souvenirs: '',
    reserve: ''
  };
  delete data.extendedBudget;
  data.forecastWeather = {};
  data.extendedSpent = defaultExtendedSpent;
}

$logoAnchor.addEventListener('click', () => {
  switchView('home');
});
$home.addEventListener('submit', handleTripSelection);
$dayForm.addEventListener('submit', handleDayForm);
$extendedForm.addEventListener('submit', handleExtendedForm);
$tripTypeButton.addEventListener('click', handleSwap);
$dayPlanner.addEventListener('click', handleNavDayPlanner);
$extendedPlanner.addEventListener('click', handleNavExtendedPlanner);
$daySpentForm.addEventListener('submit', handleDaySpentForm);
$extendedSpentForm.addEventListener('submit', handleExtendedSpentForm);
$editDaySummaryLink.addEventListener('click', handleEditDaySummaryLink);
$editExtendedSummaryLink.addEventListener(
  'click',
  handleEditExtendedSummaryLink
);
$editDayForm.addEventListener('submit', handleSubmitEditDayForm);
$editExtendedForm.addEventListener('submit', handleSubmitEditExtendedForm);
$dayDeleteLink.addEventListener('click', handleModalOpen);
$extendedDeleteLink.addEventListener('click', handleModalOpen);
$cancelModalLink.addEventListener('click', handleHideModal);
$deleteModalLink.addEventListener('click', handleDeleteEntry);
