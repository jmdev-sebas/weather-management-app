import fetch from 'node-fetch';
import 'dotenv/config';

async function fetchWeatherData(city) {
    const apiKey = process.env.API_KEY;
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

export { fetchWeatherData };