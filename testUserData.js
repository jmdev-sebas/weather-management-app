//Import your custom library
const { createUser, getUserByName, updateUserCity } = require('./userData');

const newUser = createUser({ name:'Emily', city:'Penang' });
console.log(newUser);


//Test getUserByName
const foundUser = getUserByName('Emily');
console.log("Found user by name: " + foundUser);

//Test updateUserCity
const updateUser = updateUserCity('Emily', 'Kuala Lumpur');
console.log("User city updated: " + updateUser);