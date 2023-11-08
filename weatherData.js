let fetch;

async function loadFetch() {
    if (!fetch) {
        fetch = (await (import('node-fetch'))).default;
    }   
}

async function fetchWeatherData(city) {
    await loadFetch();
    const apiKey = '6791eddb42e7466f9f332842230711';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Could not fetch weather data: ', error);
        return null;
    }
}

module.exports = { fetchWeatherData };