const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/api/workouts', async (req, res) => {
   try {
     const workouts = await Workout.aggregate([
       { $addFields: {
         totalDuration: { $sum: '$exercises.duration' }
       }}
     ])
     res.status(200).json(workouts);
   } catch (error) {
     res.status(500).json(error);
   }
});

module.exports = router;