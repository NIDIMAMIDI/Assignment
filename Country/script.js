async function fetchCountryData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country data:', error);
      return null;
    }
  }
async function updateCountryInfo() {
    const countryInfoElement = document.querySelector('.country-info');
  
    countryInfoElement.textContent = 'Loading...';
  
    const countryData = await fetchCountryData();
  
    if (countryData) {
      const randomIndex = Math.floor(Math.random() * countryData.length);
      const randomCountry = countryData[randomIndex];
  
      const countryName = randomCountry.name.common || 'Unknown';
      const capital = randomCountry.capital || 'Unknown';
      const population = randomCountry.population || 'Unknown';
  
      const countryInfoHTML = `
        <h2 style="text-align: center;" >Random Country Details are</h2>
        <p>Country Name: ${countryName}</p>
        <p>Capital: ${capital}</p>
        <p>Expected Population: ${population}</p>
      `;
  
      countryInfoElement.innerHTML = countryInfoHTML;
    } else {
      countryInfoElement.textContent = 'Failed to fetch country data.';
    }
  }
  
  // Initialize the application when the page loads
  window.addEventListener('load', updateCountryInfo);
  