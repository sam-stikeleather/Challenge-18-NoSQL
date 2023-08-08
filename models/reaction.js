const mongoose = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Add a console log to indicate that the schema is being defined
console.log('Defining Thought schema');

const Thought = mongoose.model('Thought', thoughtSchema);

// Add a console log to indicate that the model is being created
console.log('Creating Thought model');

module.exports = Thought;
