const { Thought } = require('../models');

const thoughtData = [
  {
    thoughtText: 'Thought 1',
    username: 'user1',
  },
  {
    thoughtText: 'Thought 2',
    username: 'user2',
  },
  // Add more thought data as needed
];

const seedThoughts = async () => {
  await Thought.deleteMany({});
  await Thought.create(thoughtData);
};

module.exports = seedThoughts;