const apiKey = "dba7f22cdd42ef612aa6acddfe9ec7cf";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherCard = document.getElementById("weather-card");

    if (city === "") {
        weatherCard.innerHTML = `
            <h2>Error</h2>
            <p>Please enter a city name.</p>
        `;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found. Please try again.");
        }

        const data = await response.json();

        weatherCard.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>🤗 Feels Like:</strong> ${data.main.feels_like} °C</p>
            <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>
            <p><strong>☁ Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>📊 Pressure:</strong> ${data.main.pressure} hPa</p>
        `;
    } catch (error) {
        weatherCard.innerHTML = `
            <h2>Error</h2>
            <p>${error.message}</p>
        `;
    }
}