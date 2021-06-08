const router = require('express').Router();
const Workout = require('../models');

router.get('/workouts', async (req, res) => {
  try {
   const workouts = await Workout.find().exec()
  res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;