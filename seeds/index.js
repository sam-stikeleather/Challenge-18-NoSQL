const db = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');

db.once('open', async () => {
  await seedUsers();
  await seedThoughts();

  console.log('Database seeded!');
  process.exit(0);
});
