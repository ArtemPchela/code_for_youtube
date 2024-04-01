import WEATHER_API from "./secret.js";

const fetchWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    updateWeatherTicker(data)
  } catch (error) {
    console.error("Error fetching weather data:", error)
  }
}

const updateWeatherTicker = (data) => {
  if(!data || data.cod !== 200) {
    return
  }

  const weatherInfo = `
    Weather in ${data.name}:
    Temperature ${data.main.temp}°C, ${data.weather[0].main}
    Humidity: ${data.main.humidity},
    Wind Speed ${data.wind.speed} m/s.
  `

  const weatherTicker = document.getElementById("weather-ticker");
  weatherTicker.innerHTML = `<div class="weather-ticker-content">${weatherInfo}</div>`
}

const getLocation = () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchWeather(lat, lon);
    },
      () => {
        console.error("Geolocation permission denied")
      },
    );
  } else {
    console.error("Geolocation is not supported by this browser")
  }
};

window.onload = getLocation;
