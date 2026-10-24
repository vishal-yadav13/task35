import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { deleteWorkout } = useContext(WorkoutContext);

  const handleDelete = () => {
    deleteWorkout(workout);
  };

  const date = new Date(workout.createdAt);
  const time = date.toLocaleString();

  return (
    <div className="workout-card">
      <button
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete workout"
      >
        🗑️
      </button>

      <h3>{workout.title}</h3>

      <p>
        <strong>Load (in Kgs):</strong> {workout.load}
      </p>

      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>

      <p className="created-time">
        Created: {time}
      </p>
    </div>
  );
};

export default WorkoutDetails;