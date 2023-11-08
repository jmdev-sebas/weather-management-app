import { createUser, loadUserData } from '../../src/userData.js';

async function testCreateUser() {
  console.log("Testing createUser...");
  const newUser = await createUser({ name: 'John', city: 'Boston' });
  console.log('Created User:', newUser);
}

async function runTests() {
  await loadUserData();
  await testCreateUser();
}

runTests().catch(console.error);