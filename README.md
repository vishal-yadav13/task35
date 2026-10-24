## Workout Buddy

Workout Buddy is a simple MERN stack workout tracking application.

Users can add workouts, view saved workouts, and delete workouts.The application uses React Context API for frontend state management and MongoDB Atlas for storing workout data.

## Features

. Add a new workout 
. View all workouts
. Delete workouts 
. Created time shown for each workout 
. Form validation
. Input error highlighting
. Loading message while workouts are being fetched
. Delete error messages
. Responsive design
. React Context API
. Express REST API
MongoDB Atlas with Mongoose
. Environment variable support

## Technologies Used

Frontend
. React.js
. Vite
. React Context API
. useReducer
. CSS


Backend

. Node.js
. Express.js
. MongoDB Atlas
. Mongooes
. Dotenv
. CORS


Project Structure
tsk 35/
├── Backend/
│   ├── controllers/
│   │   └── workoutController.js
│   ├── models/
│   │   └── Workout.js
│   ├── routes/
│   │   └── workouts.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── WorkoutDetails.jsx
│   │   │   └── WorkoutForm.jsx
│   │   ├── context/
│   │   │   └── WorkoutContext.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── ...
│
└── README.md  


## Backend API

Get all workouts

GET/api/workouts

Returns all workouts with the latest workouts first.

Create a workout

POST/api/workouts

Creates a new workout using the title, load, and reps values

Delete a workout

DELETE/api/workout/:id

Deletes a workouts using its MongoDB ID.

Backend Setup

Open a terminal in the Backend folder:

cd Backend 
npm install
Create a .env file inside the Backend folder:
MONGO_URI=your_mongodb_atlas_connection_string PORT=5000

A .env.example file is also included as a reference. Do not put your real MongoDB password or connection string in .env.example


Start the backend in development mode:

npm run dev

The backend runs on:
http://localhost:5000


## Frontend Setup

Open another terminal and go to the frontend folder:

cd frontend 
npm install

Create a .env file inside the frontend folder:
VITE_API_URL=http://localhost:5000

The project also includes a .env.example file:

VITE_API_URL=http://localhost:5000

Start the frontend:

npm run dev

The frontend normally runs on:

http://localhost:5173

## How It Works
The React frontend sneds requests to the Express backend 

The backend uses Mongooes to save,retrieve,and delete workout data from MongoDB Atlas.

React Context API is used to share workout data between components. The application  also uses useReducer to update the workout list when workouts are added or deleted.

The frontend shows loading feedback while workouts are being fetched and displays
error messages when an operation fails.

## Form Validation

The workout form checks that:

. Workout title is not  empty.
. Load is entered and is greater than 0.
. Reps are entered and are greater than 0.

Invalid fields are highlighted and an error message is displayed below the field.

Environment Variables

The application uses environment variables instead of keeping the API URL and MongoDB connection string directly in the source code.

Backend
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Frontend 

VITE_API_URL=http://localhost:5000

Never share the real .env file if it contains private credentials.

## Author 

Ashish Kumar