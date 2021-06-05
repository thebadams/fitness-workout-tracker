const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: 'You Must Indicate a Workout Type',
      },
      name: {
        type: String,
        required: 'You Must Indicate What The Exercise Is Called',
      },
      duration: {
        type: Number,
        required: 'You Must Tell Us How Long the Exercise Took',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
