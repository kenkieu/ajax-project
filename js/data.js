/* exported data */

var dateObj = new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };
var currentDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

var data = {
  view: '',
  tripType: '',
  editing: null,
  currentWeather: { date: currentDate },
  forecastWeather: []
};

var previousJSONData = localStorage.getItem('trip');
if (previousJSONData !== null) {
  data = JSON.parse(previousJSONData);
}

function handleBeforeUnload() {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('trip', dataJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload)
