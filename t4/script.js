
const apiKey = '4b506a0513f2cd69fd13f1bcb8cac903';


function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    if (city.trim() === '') {
        weatherResult.innerHTML = '<p class="error">Please enter a city name.</p>';
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <img src="${weatherIcon}" alt="Weather Icon" class="weather-icon">
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
        });
}
