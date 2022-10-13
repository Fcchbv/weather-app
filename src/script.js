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
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = 0`${minutes}`;
}
function formatDate() {
  return `${day} ${hours}:${minutes}`;
}
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formatDate();

let form = document.querySelector("#search-city");

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

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°C`;
  console.log(currentTemperature);
}

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
