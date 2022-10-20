let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();
let month = months[now.getMonth()];
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${minutes}`;
}
function formatDate() {
  return `${day} ${date}/${month} ${hours}:${minutes}`;
}
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formatDate();

let celsiusTemperature = null;

let form = document.querySelector("#search-city");
let fahrenheitConvertor = document.querySelector("#fahrenheit");
fahrenheitConvertor.addEventListener("click", showFahrenheitTemperature);

let celsiusConvertor = document.querySelector("#celsius");
celsiusConvertor.addEventListener("click", showCelsiusTemperature);

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  currentTemperature.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(celsiusTemperature);
}
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temperature");
  let descriprion = document.querySelector("#weather-description");
  let windSpeed = document.querySelector("#windspeed");
  let speedOfWind = response.data.wind.speed;
  let weatherIcon = document.querySelector("#weather-icon");
  celsiusTemperature = response.data.main.temp;

  currentTemperature.innerHTML = `${temperature}°C`;
  descriprion.innerHTML = response.data.weather[0].description;
  windSpeed.innerHTML = `Wind: ${speedOfWind} km/h`;
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#current-city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;
  let citySearch = cityInput.value;
  let apiKey = "d193d69b99ce2e18bf5d77bc4a71fb9e";
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=${apiKey}`;
  console.log(apiLink);
  axios.get(apiLink).then(showTemperature);
}

form.addEventListener("submit", search);

/*function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}
function showLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lattitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}

navigator.geolocation.getCurrentPosition(showLocation); */
