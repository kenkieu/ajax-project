/* exported data */

var dateObj = new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };
var currentDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

var data = {
  view: '',
  tripType: '',
  entry: [],
  editing: null,
  currentWeather: { date: currentDate },
  forecastWeather: []
};

// console.log(data);
