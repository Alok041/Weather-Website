const apiKey = 'dfd0ea7e41363df4a706a782a14c6ce2'; 

function getWeather() {
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}
