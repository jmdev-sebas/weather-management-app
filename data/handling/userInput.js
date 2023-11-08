import readline from 'readline';
import { createUser, updateUserCity } from '../../src/userData.js';
import exp from 'constants';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function handleIO() {
    try {
        const command = await askQuestion('Enter a command (create/update):');

        if(command === 'create') {
                const name = await askQuestion('Enter name: ');
                const city = await askQuestion('Enter city: ');
                const newUser = await createUser({ name, city }); // Store the values 
                console.log('User has been created: ', newUser) //Output the stored value.
        } else if (command === 'update') {
                const name = await askQuestion('Enter name: ');
                const newCity = await askQuestion('Enter new city: ');
                const updateUser = await updateUserCity(name, newCity); 
                if(updateUser) {
                    console.log("User updated: " + updateUser)
                } else {
                    console.log("User Not found.");
                }
        } else {
            console.log('Invalid command.');
        }
    } catch (error) {
        console.log('An error occured: ', error)
    } finally {
        rl.close();
    }
}

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

export { handleIO }