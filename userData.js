const fs = require('fs').promises;

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
    const newUser = { name, city };
    users.push(newUser);
    console.log(users);
    await saveUserData(); //when we create a user, it will be saved into userData.json
    return newUser;
}

//Function to retrieve a user's information
function getUserByName(name) {
    return users.find((user) => user.name === name); //arrow function that checks if user exist or not
}

//Function to update user city by name
async function updateUserCity(name, newCity) {
    const user = getUserByName(name);

    if(user) {
        user.city = newCity;
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