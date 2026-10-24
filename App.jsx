import { useContext, useEffect } from "react";
import { WorkoutContext } from "./context/WorkoutContext";
import WorkoutDetails from "./components/WorkoutDetails";
import WorkoutForm from "./components/WorkoutForm";
import "./App.css";

function App() {
  const { workouts, loading, error, getWorkouts } =
    useContext(WorkoutContext);

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Workout Budyyy</h1>
      </header>

      <main className="workout-container">
        <section className="workout-list">
          {loading && <p className="loading-message">Loading...</p>}

          {error && <p className="error-message">{error}</p>}

          {!loading && !error && workouts.length === 0 && (
            <p className="empty-message">
              No workouts yet. Add one!
            </p>
          )}

          {!loading &&
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
              />
            ))}
        </section>

        <section className="workout-form-section">
          <WorkoutForm />
        </section>
      </main>
    </div>
  );
}

export default App;