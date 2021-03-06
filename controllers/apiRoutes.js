const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/api/workouts', async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: '$exercises.duration' },
        },
      },
    ]);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/api/workouts/range', async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: '$exercises.duration' },
        },
      },
    ])
      .limit(7)
      .sort({ day: 1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/api/workouts/:id', async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body,
      },
    }, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/api/workouts/', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
