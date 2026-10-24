import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

const initialState = {
  workouts: [],
  loading: false,
  error: null,
};

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        ...state,
        workouts: action.payload,
      };

    case "ADD_WORKOUT":
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };

    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);

  const API_URL = import.meta.env.VITE_API_URL;

  const getWorkouts = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(`${API_URL}/api/workouts`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not get workouts");
      }

      dispatch({
        type: "SET_WORKOUTS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }

    dispatch({ type: "SET_LOADING", payload: false });
  };

  const createWorkout = async (workout) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(`${API_URL}/api/workouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not create workout");
      }

      dispatch({
        type: "ADD_WORKOUT",
        payload: data,
      });

      dispatch({ type: "SET_LOADING", payload: false });

      return true;
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });

      dispatch({ type: "SET_LOADING", payload: false });

      return false;
    }
  };

  const deleteWorkout = async (workout) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(
        `${API_URL}/api/workouts/${workout._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not delete workout");
      }

      dispatch({
        type: "DELETE_WORKOUT",
        payload: workout,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }

    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <WorkoutContext.Provider
      value={{
        ...state,
        getWorkouts,
        createWorkout,
        deleteWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};