import { handleIO } from "../data/handling/userInput.js";

async function main() {
    try {
        await handleIO();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
