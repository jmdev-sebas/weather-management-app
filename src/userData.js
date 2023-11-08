import { promises as fs } from 'fs';
import { fetchWeatherData } from './weather data/weatherData.js';
import path from 'path'; 
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// This gives you the directory name of the current module.
const __dirname = dirname(fileURLToPath(import.meta.url));

let users = [];

async function saveUserData() {
    try {
        // __dirname is the directory name of the current module, i.e. file system path to src/
        const filePath = path.join(__dirname, '..', 'data', 'data', 'userData.json');
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        
    } catch (error) {
        console.log('Error saving the dat:', error);
    }
}

//Function to create a new user
async function createUser({ name, city }) {
    const fullWeatherData = await fetchWeatherData(city);
    const { localtime } = fullWeatherData.location;
    const { text } = fullWeatherData.current.condition;

    const weatherData = {
        localtime,
        text
    }
    const newUser = { name, city, weatherData };
    users.push(newUser);
    await saveUserData(); //when we create a user, it will be saved into userData.json.
    return newUser;
}

//Function to update user city by name
async function updateUserCity(name, newCity) {
    
    const index = users.findIndex(function verifyIfUserExit(user) {
        return user.name === name;
    });

    if (index !== -1) {
        const fullWeatherData = await fetchWeatherData(newCity); // fetches the full data
        const { localtime } = fullWeatherData.location; //select the localtime property from the location property
        const { text } = fullWeatherData.current.condition; //selectec the text property from condition property which from the current property

        const weatherData = {
            localtime,
            text
        }

        users[index].city = newCity;
        users[index].weatherData = weatherData;
        await saveUserData() // edit the city info, it will be saved into userData.json
        return user;
    }
    return null;
}

async function loadUserData() {
    try {
        // __dirname is the directory name of the current module, i.e., the file system path to src/
        const filePath = path.join(__dirname, '..', 'data', 'data', 'userData.json');
        const data = await fs.readFile(filePath, 'utf-8'); // Read the file with UTF-8 encoding
        users = JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('userData.json does not exist. A new file will be created upon saving data.');
            // If the file doesn't exist, you can initialize `users` as an empty array
            // or whatever your default is supposed to be.
            users = [];
        } else {
            // If it's a different kind of error, log it.
            console.log('Error loading user data:', error);
        }
    }
}

loadUserData();

export {
    createUser,
    updateUserCity,
    loadUserData
}