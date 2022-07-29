// Feature #1
let now = new Date();

let currently = document.querySelector("#updated");

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
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currently.innerHTML = `Last updated on ${day}, ${month} ${date}, ${year} at ${hours}:${minutes}`;

// Week 4?
function showWeather(response) {
  document.querySelector("#current-view").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
//search function to locate weather city
function searchEngine(event) {
  event.preventDefault();
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let city = document.querySelector("#search-text").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
//search function to locate weather when clicking "enter"
// function searchPressEnter(event) {
//   event.preventDefault();
//   let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
//   let city = document.querySelector("#search-text").value;
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(showWeather);
// }

//click on "Search" button
let searchButt = document.querySelector("#search-form");
searchButt.addEventListener("submit", searchEngine);

//press enter instead of "Search" button
// let enterSearchButt = document.querySelector("#search-button");
// searchButt.addEventListener("keydown", searchPressEnter);

//added from week 5
function showTemp(response) {
  console.log(response);

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let city = response.data.name;
  let viewing = document.querySelector("#currently-viewing");
  let currentDesc = document.querySelector("#current-desc");
  let currentTemperature = document.querySelector("current-temp");
  viewing.innerHTML = `Currently viewing: ${city}`;
  currentDesc.innerHTML = `${response.data.weather.description}`;
  currentTemperature.innerHTML = `${response.data.main.temp}°C`;
}

function retrieveCity(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let city = document.querySelector("#search-text");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
navigator.geolocation.getCurrentPosition(retrieveCity);
//
//
//Week 5 Bonus HW Challenge:
function getCoordinates(position) {
  let apiKey = "29a4ad7a3a9232d56b27c341061a6051";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function findCurrentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
  // let searchInput = document.querySelector();
  // axios.get(apiUrl).then(getCoordinates);
}

let greenButton = document.querySelector("#curr-loc-but");
greenButton.addEventListener("click", findCurrentLoc);
//
//
//
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space
//space

//let searchInput = document.querySelector("#search-text");

//searchInput.innerHTML = `Currently viewing: ${viewing.value}`;

//Feature #3 - Bonus (NO classes or ID's in HTML)
// need to create links/link the buttons with elements for
// C and F, then make a function.
/*

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32)
}
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  no idea, unfinished and used fake data so will do later
}


let temperatureElement = document.querySelector(#temperature);
let temperature = temperatureElement.innerHTML;
console.log(temperature);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
*/