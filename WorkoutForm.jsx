import { useState, useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutForm = () => {
  const { createWorkout } = useContext(WorkoutContext);

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Workout title is required");
      return;
    }

    if (!load) {
      setError("Load is required");
      return;
    }

    if (!reps) {
      setError("Reps are required");
      return;
    }

    const loadNumber = Number(load);
    const repsNumber = Number(reps);

    if (loadNumber <= 0) {
      setError("Load must be greater than 0");
      return;
    }

    if (repsNumber <= 0) {
      setError("Reps must be greater than 0");
      return;
    }

    const success = await createWorkout({
      title: title.trim(),
      load: loadNumber,
      reps: repsNumber,
    });

    if (success) {
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
    }
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h2>Add a New Workout</h2>

      <label>Workout Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. Chest"
        className={!title.trim() && error ? "input-error" : ""}
      />

      <label>Load (in Kgs)</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        placeholder="e.g. 50"
        min="1"
        className={
          (!load || Number(load) <= 0) && error ? "input-error" : ""
        }
      />

      <label>Reps</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="e.g. 10"
        min="1"
        className={
          (!reps || Number(reps) <= 0) && error ? "input-error" : ""
        }
      />

      {error && <p className="form-error">{error}</p>}

      <button type="submit">ADD WORKOUT</button>
    </form>
  );
};

export default WorkoutForm;