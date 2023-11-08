//Import your custom library
const { createUser, getUserByName, updateUserCity } = require('./userData');

const newUser = createUser({ name:'Jonathan', city:'Penang' });
console.log(newUser);


//Test getUserByName
const foundUser = getUserByName('Jonathan');
console.log("Found user by name: " + foundUser);

//Test updateUserCity
const updateUser = updateUserCity('Jonathan', 'Kuala Lumpur');
console.log("User city updated: " + updateUser);
