import { loadUserData, updateUserCity } from '../../src/userData.js';

async function testUpdateUserCity() {
  console.log("Testing updateUserCity...");
  const updatedUser = await updateUserCity('John', 'Miami');
  console.log('Updated User:', updatedUser);
}

async function runTests() {
  await loadUserData();
  await testUpdateUserCity();
}

runTests().catch(console.error);