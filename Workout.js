const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    load: {
      type: Number,
      required: true,
      min: 1,
    },

    reps: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);