//Use Giphy API to relate the data
//Celcius to Fahrenheit
let inputLocation = document.querySelector("#input-location");
let btnSearch = document.querySelector("#search");
let container = document.querySelector(".container");
let content = document.querySelector(".content");
let loadingEl = document.querySelector(".content__loading");
let weatherData;

let getWeatherData = async () => {
  let response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&appid=dc29b393936d367688524f51516f50ea&units=metric
    `);

  if (response.ok) {
    let res = await response.json();
    weatherData = res;
  } else {
    alert(`Error! ${response.status} ${response.statusText}`);
  }
  //   let data = await response.json();
  //   weatherData = data;
  updateUI();
  console.log(weatherData);
};

function updateUI() {
  content.innerHTML = `
<div class="content__city">
  ${weatherData.name}
  <div class="content__country">${weatherData.sys.country}</div>
</div>
<div class="content__main-temp">${weatherData.main.temp.toFixed()}°C</div>

<div class="content__details">
  <div class="content__weather-description">
    <i class="fa-solid fa-cloud"></i>Weather: ${
      weatherData.weather[0].description
    }
  </div>
  <div class="content__feels-like">
    <i class="fa-solid fa-temperature-half"></i>Feels Like: ${
      weatherData.main.feels_like
    }
  </div>
  <div class="content__wind-speed">
    <i class="fa-solid fa-wind"></i>Wind Speed: ${weatherData.wind.speed}
  </div>
`;
}

function handleSearch(e) {
  e.preventDefault();
  getWeatherData();
  console.log(weatherData);
}

btnSearch.addEventListener("click", handleSearch);
