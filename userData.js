const fs = require('fs').promises;
const { fetchWeatherData } = require('./weatherData');

let users = [];

async function saveUserData() {
    try {
        await fs.writeFile('userData.json', JSON.stringify(users, null, 2));
        console.log('User data saved to userData.json');
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
    await saveUserData(); //when we create a user, it will be saved into userData.json
    return newUser;
}

//Function to retrieve a user's information
function getUserByName(name) {
    return users.find((user) => user.name === name); //arrow function that checks if user exist or not
}

//Function to update user city by name
async function updateUserCity(name, newCity) {
<<<<<<< HEAD
    
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
=======
    const user = getUserByName(name);

    if(user) {
        user.city = newCity;
>>>>>>> parent of 286ada5 (added the weather API feature)
        await saveUserData() // edit the city info, it will be saved into userData.json
        return user;
    }
    return null;
}

async function loadUserData() {
    try {
        const data = await fs.readFile('userData.json','utf-8');
        users = JSON.parse(data);
    } catch (error) {
        console.log('Error loading user data', error)
    }
}

loadUserData();

module.exports = {
    createUser,
    getUserByName,
    updateUserCity,
}


/*
//Test createUser
const user1 = createUser({ name: 'Emily', city: 'New York' });
console.log(user1)

//Test getUserByName
const foundUser = getUserByName('Emily');
if(foundUser) {
    console.log("Found user by name: " + foundUser.name)
} else {
    console.log("User Not found");
}

//Test updateUserCity
const updateUser = updateUserCity('Emily', 'Kuala Lumpur');
if(updateUser) {
    console.log("User city updated: " + updateUser.city)
} else {
    console.log("User Not found for the city update");
}
*/