const express = require('express');
const mongoose = require('mongoose');
const routes = require('./controllers');
const Workout = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

app.get('/api/workouts', async (req, res) => {
  try {
  const workouts = Workout.find().exec();
  res.status(200).json(workouts)
} catch (error) {
  res.status(500).json(error)
}
});


