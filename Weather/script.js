const apiKey = '716181f946587eb897edf11d458bfa2d';
async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
function updateWeatherInfo(data) {
    const weatherDataElement = document.querySelector('.weather-data');
  
    if (data) {
      const cityName = data.name;
      const temperature = (data.main.temp - 273.15).toFixed(2); 
      let description = 'No data available';
  
      if (data.weather && data.weather.length > 0) {
        description = data.weather[0].description;
      }
  
      const weatherInfoHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
      `;
  
      weatherDataElement.innerHTML = weatherInfoHTML;
    } else {
      weatherDataElement.innerHTML = '<p>Failed to fetch weather data.</p>';
    }
  }
  
async function init() {
  const city = 'Anantapur'; 
  const weatherData = await getWeatherData(city);
  updateWeatherInfo(weatherData);
}
window.addEventListener('load', init);
