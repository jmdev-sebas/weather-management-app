const readline = require('readline');
const { createUser, updateUserCity, getUserByName } = require('./userData');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {
    try {
        const command = await askQuestion('Enter a command (create/update):');

        if(command === 'create') {
                const name = await askQuestion('Enter name: ');
                const city = await askQuestion('Enter city: ');
                const newUser = createUser({ name, city }); // Store the values 
                console.log('User has been created: ', newUser) //Output the stored value
        } else if (command === 'update') {
                const name = await askQuestion('Enter name: ');
                const city = await askQuestion('Enter new city: ');
                const updateUser = updateUserCity(name, newCity); 
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

main();

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}