const Workout = require("../models/Workout");

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({
      error: "Could not get workouts",
    });
  }
};

// Create a workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  if (!title || load === undefined || reps === undefined) {
    return res.status(400).json({
      error: "Please fill all fields",
    });
  }

  const loadNumber = Number(load);
  const repsNumber = Number(reps);

  if (Number.isNaN(loadNumber) || loadNumber <= 0) {
    return res.status(400).json({
      error: "Load must be a positive number",
    });
  }

  if (Number.isNaN(repsNumber) || repsNumber <= 0) {
    return res.status(400).json({
      error: "Reps must be a positive number",
    });
  }

  try {
    const workout = await Workout.create({
      title: title.trim(),
      load: loadNumber,
      reps: repsNumber,
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({
      error: "Could not add workout",
    });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);

    if (!workout) {
      return res.status(404).json({
        error: "Workout not found",
      });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: "Could not delete workout",
    });
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};