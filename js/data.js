/* exported data */

const dateObj = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
const currentDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

let data = {
  view: '',
  daySpent: { transport: '', food: '', activities: '', souvenirs: '', reserve: '' },
  extendedSpent: { transport: '', lodging: '', food: '', activities: '', souvenirs: '', reserve: '' },
  currentWeather: { date: currentDate }
};

const previousJSONData = localStorage.getItem('trip');
if (previousJSONData !== null) {
  data = JSON.parse(previousJSONData);
}

function handleBeforeUnload() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('trip', dataJSON);
}

window.addEventListener('beforeunload', handleBeforeUnload);
