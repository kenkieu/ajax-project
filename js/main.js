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

const [$dayTransportSpent] = $('#day-transport-spent');
const [$dayFoodSpent] = $('#day-food-spent');
const [$dayActivitiesSpent] = $('#day-activities-spent');
const [$daySouvenirsSpent] = $('#day-souvenirs-spent');
const [$dayReserveSpent] = $('#day-reserve-spent');

const $modalContainer = document.querySelector('#modal-container');

function handleTripSelection(event) {
  event.preventDefault();
  const [$tripSelect] = $('#trip-type');
  switchView($tripSelect.value);
}

function handleDayForm(event) {
  event.preventDefault();
  const $dayForm = $('day-form').prevObject[0].forms[1];
  const dayBudget = {};
  dayBudget.destination = $dayForm['day-destination'].value;
  dayBudget.transport = $dayForm['day-budget-transport'].value;
  dayBudget.food = $dayForm['day-budget-food'].value;
  dayBudget.activities = $dayForm['day-budget-activities'].value;
  dayBudget.souvenirs = $dayForm['day-budget-souvenirs'].value;
  dayBudget.reserve = $dayForm['day-budget-reserve'].value;
  data.dayBudget = dayBudget;

  const $daySpentTD = document.querySelectorAll('.day-spent-td');
  const $daySpentInput = document.querySelectorAll('.day-spent-input');
  for (const key in data.daySpent) {
    if (data.daySpent[key] === '') {
      for (let i = 0; i < $daySpentTD.length; i++) {
        if (
          $daySpentTD[i].id.includes(key) &&
          $daySpentInput[i].id.includes(key)
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
  defaultBudgetValues('#day-form');
  switchView('day-summary');
}

function handleExtendedForm(event) {
  event.preventDefault();
  const extendedBudget = {};
  const $extendedForm = $('extended-form').prevObject[0].forms[2];
  getForecastWeather($extendedForm['extended-destination'].value);
  extendedBudget.destination = $extendedForm['extended-destination'].value;
  extendedBudget.transport = $extendedForm['extended-transport'].value;
  extendedBudget.lodging = $extendedForm['extended-lodging'].value;
  extendedBudget.food = $extendedForm['extended-food'].value;
  extendedBudget.activities = $extendedForm['extended-activities'].value;
  extendedBudget.souvenirs = $extendedForm['extended-souvenirs'].value;
  extendedBudget.reserve = $extendedForm['extended-reserve'].value;
  data.extendedBudget = extendedBudget;

  const $extendedSpentTD = $('.extended-spent-td');
  const $extendedSpentInput = $('.extended-spent-input');
  for (const key in data.extendedSpent) {
    if (data.extendedSpent[key] === '') {
      for (let i = 0; i < $extendedSpentTD.length; i++) {
        if (
          $extendedSpentTD[i].id.includes(key) &&
          $extendedSpentInput[i].id.includes(key)
        ) {
          $extendedSpentTD[i].textContent = '';
          $extendedSpentInput[i].value = '';
          $extendedSpentTD[i].appendChild($extendedSpentInput[i]);
        }
      }
    }
  }
  populateExtendedBudget();
  defaultBudgetValues('#extended-form');
  switchView('extended-summary');
}

function getCurrentWeather(name) {
  const [$dayTripContainer] = $('#day-summary');
  const [$daySpinner] = $('#day-spinner');
  const [$currentWeatherCard] = $('#current-weather-card');
  const [$weatherError] = $('#weather-error');
  $daySpinner.classList.remove('hidden');
  fetch(
    `https://api.weatherbit.io/v2.0/current?&city=${name}&country=US&key=40a3d45da7724864bea69f3762cab669&units=i`
  )
    .then(res => res.json())
    .then(result => {
      const { data: dataset } = result;
      $daySpinner.classList.add('hidden');
      data.currentWeather.location =
        dataset[0].city_name + ',' + dataset[0].state_code;
      data.currentWeather.temp = `${dataset[0].temp}°F`;
      data.currentWeather.icon = `images/icons/${dataset[0].weather.icon}.png`;
      data.currentWeather.description = dataset[0].weather.description;
      $currentWeatherCard && $currentWeatherCard.remove();
      $weatherError && $weatherError.remove();
      $dayTripContainer.prepend(createCurrentWeather());
    })
    .catch(err => {
      if (err) {
        $currentWeatherCard && $currentWeatherCard.remove();
        $weatherError && $weatherError.remove();
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
  $errorColumn.className = 'column-full grid grid-cols-2 error-container';
  const $imageDiv = document.createElement('div');
  $imageDiv.className = 'cloud-container';
  const $errorImage = document.createElement('img');
  $errorImage.setAttribute('src', '../images/sad-cloud.png');
  $errorImage.classList.add('error-cloud');
  const $textDiv = document.createElement('div');
  $textDiv.className = 'm-auto';
  const $errorHeading = document.createElement('h4');
  $errorHeading.textContent = 'ERROR';
  const $errorMessage = document.createElement('p');
  $errorMessage.className = 'error-message';
  $errorMessage.textContent =
    'Sorry, Bob could not find your request. Please verify that a valid City, State was entered.';
  $cardSky.appendChild($errorColumn);
  $errorColumn.appendChild($imageDiv);
  $errorColumn.appendChild($textDiv);
  $imageDiv.appendChild($errorImage);
  $textDiv.appendChild($errorHeading);
  $textDiv.appendChild($errorMessage);
  return $cardSky;
}

function getForecastWeather(name) {
  const [$forecastWeatherCard] = $('#forecast-weather-card');
  const [$weatherError] = $('#weather-error');
  const [$extendedSpinner] = $('#extended-spinner');

  $extendedSpinner.classList.remove('hidden');

  fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&country=US&key=40a3d45da7724864bea69f3762cab669&units=i&days=5`
  )
    .then(response =>
      response.json().then(result => {
        const { data: dataset } = result;
        $extendedSpinner.classList.add('hidden');
        const forecastArr = [];
        for (let i = 0; i < dataset.length; i++) {
          const dailyForecast = {};
          dailyForecast.location = result.city_name + ', ' + result.state_code;
          dailyForecast.temp = dataset[i].temp;
          dailyForecast.date = dataset[i].datetime.slice(5).replace('-', '/');
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
      })
    )
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
  $('#day-transport-budget').text(data.dayBudget.transport);
  $('#day-food-budget').text(data.dayBudget.food);
  $('#day-activities-budget').text(data.dayBudget.activities);
  $('#day-souvenirs-budget').text(data.dayBudget.souvenirs);
  $('#day-reserve-budget').text(data.dayBudget.reserve);
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
  const daySpent = {
    transport: $daySpentTransportInput.value,
    food: $daySpentFoodInput.value,
    activities: $daySpentActivitiesInput.value,
    souvenirs: $daySpentSouvenirsInput.value,
    reserve: $daySpentReserveInput.value
  };
  data.daySpent = daySpent;

  inputToValue($daySpentTransportInput, $daySpentTransportInput.value);
  inputToValue($daySpentFoodInput, $daySpentFoodInput.value);
  inputToValue($daySpentActivitiesInput, $daySpentActivitiesInput.value);
  inputToValue($daySpentSouvenirsInput, $daySpentSouvenirsInput.value);
  inputToValue($daySpentReserveInput, $daySpentReserveInput.value);
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

  inputToValue($extendedSpentTransportInput, $extendedSpentTransportInput.value);
  inputToValue($extendedSpentLodgingInput, $extendedSpentLodgingInput.value);
  inputToValue($extendedSpentFoodInput, $extendedSpentFoodInput.value);
  inputToValue($extendedSpentActivitiesInput, $extendedSpentActivitiesInput.value);
  inputToValue($extendedSpentSouvenirsInput, $extendedSpentSouvenirsInput.value);
  inputToValue($extendedSpentReserveInput, $extendedSpentReserveInput.value);
}

function inputToValue(input, value) {
  if (value !== '') {
    input.replaceWith(value);
  }
}

function populateDaySpent() {
  inputToValue($daySpentTransportInput, data.daySpent.transport);
  inputToValue($daySpentFoodInput, data.daySpent.food);
  inputToValue($daySpentActivitiesInput, data.daySpent.activities);
  inputToValue($daySpentSouvenirsInput, data.daySpent.souvenirs);
  inputToValue($daySpentReserveInput, data.daySpent.reserve);
}

function populateExtendedSpent() {
  inputToValue($extendedSpentTransportInput, data.extendedSpent.transport);
  inputToValue($extendedSpentLodgingInput, data.extendedSpent.lodging);
  inputToValue($extendedSpentFoodInput, data.extendedSpent.food);
  inputToValue($extendedSpentActivitiesInput, data.extendedSpent.activities);
  inputToValue($extendedSpentSouvenirsInput, data.extendedSpent.souvenirs);
  inputToValue($extendedSpentReserveInput, data.extendedSpent.reserve);
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
  const $view = $('.view');
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

function defaultBudgetValues(tripId) {
  const [$form] = document.querySelectorAll(tripId);
  for (let i = 0; i < $form.length - 1; i++) {
    $form[i].value = '';
  }
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
  const [$dayTransportBudget] = $('#day-transport-budget');
  const [$dayFoodBudget] = $('#day-food-budget');
  const [$dayActivitiesBudget] = $('#day-activities-budget');
  const [$daySouvenirsBudget] = $('#day-souvenirs-budget');
  const [$dayReserveBudget] = $('#day-reserve-budget');
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

$('#logo').click(() => switchView('home'));
$('#home').submit(handleTripSelection);
$('#day-form').submit(handleDayForm);
$('#extended-form').submit(handleExtendedForm);
$('.trip-type-button').click(handleSwap);
$('#day-planner').click(handleNavDayPlanner);
$('#extended-planner').click(handleNavExtendedPlanner);
$('#day-spent-form').submit(handleDaySpentForm);
$('#extended-spent-form').submit(handleExtendedSpentForm);
$('#edit-day-summary-link').click(handleEditDaySummaryLink);
$('#edit-extended-summary-link').click(handleEditExtendedSummaryLink);
$('#edit-day-form').submit(handleSubmitEditDayForm);
$('#edit-extended-form').submit(handleSubmitEditExtendedForm);
$('#day-delete-link').click(handleModalOpen);
$('#extended-delete-link').click(handleModalOpen);
$('#cancel-modal-link').click(handleHideModal);
$('#delete-modal-link').click(handleDeleteEntry);
