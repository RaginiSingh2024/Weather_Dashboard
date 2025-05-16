const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city.trim() === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
