const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com', 
    
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  // Add more user data as needed
];

const seedUsers = async () => {
  await User.deleteMany({});
  await User.create(userData);
};

module.exports = seedUsers;
