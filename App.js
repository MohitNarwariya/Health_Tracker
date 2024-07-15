import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
// import UserForm from './components/UserForm';
// import WorkoutList from './components/WorkoutList';
// import WorkoutChart from './components/WorkoutChart';
import UserForm from './HealthTraker/UserForm';
import WorkoutChart from './HealthTraker/WorkoutChart';
import WorkoutList from './HealthTraker/WorkoutList';

const initialWorkouts = [
  {
    id: 1,
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 },
    ],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    workouts: [
      { type: 'Yoga', minutes: 50 },
      { type: 'Cycling', minutes: 40 },
    ],
  },
];

const App = () => {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [selectedUser, setSelectedUser] = useState(null);

  const addWorkout = (newWorkout) => {
    const existingUser = workouts.find(w => w.name === newWorkout.name);
    if (existingUser) {
      existingUser.workouts.push({
        type: newWorkout.workoutType,
        minutes: newWorkout.minutes,
      });
      setWorkouts([...workouts]);
    } else {
      setWorkouts([
        ...workouts,
        {
          id: workouts.length + 1,
          name: newWorkout.name,
          workouts: [{
            type: newWorkout.workoutType,
            minutes: newWorkout.minutes,
          }],
        },
      ]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Health Challenge Tracker
      </Typography>
      <Box sx={{ mb: 4 }}>
        <UserForm addWorkout={addWorkout} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <WorkoutList workouts={workouts} />
        <WorkoutChart workouts={workouts} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </Box>
    </Container>
  );
};

export default App;








































// import AdminLogin from "./components/AdminLogin";
// import RegistrationPage from "./components/RegistrationPage";
// import Company from "./components/Company";
// import DisplayAllCompany from "./components/DisplayAllCompany";
// import Home from "./screens/Home";

// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

// import Details from "./components/Details";
// import DashBoard from "./components/DashBoard";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import './App.css';
// import MemeCoin from "./components/MemeCoin";
// import InterShala from "./components/InterShala";
// import TodoList from "./components/TodoList";
// import VideoDownloader from "./components/VideoDownloader";
// function App() {
//   return (
//    <div className="App">
//  <Router>
//   <Routes>
//   <Route element={<RegistrationPage/>} path={"/registration"}/>
//   <Route element={<Company/>} path={"/company"}/>
//   <Route element={<Home/>} path={"/home"}/>
//   <Route element={<DisplayAllCompany/>} path={"/displayallcompany"}/>
 
//   <Route element={<AdminLogin/>} path={"/adminlogin"}/>
//   <Route element={<Details/>} path={'/details'}/>
//   <Route element={<DashBoard/>} path={'/dashboard/*'}/>
//   <Route element={<MemeCoin />} path={"/memecoin"}/>
//   <Route element={<InterShala/>} path={"/intershala"}   />
//   <Route element={<TodoList/>} path={"/todolist"}   />
//   <Route element={<VideoDownloader/>} path={"/videodownload"}   />
  
 

//   </Routes>
//   </Router>

// {/* <TaskInput />
//  <TaskList /> */}
//    </div>
//   );
// }

// export default App;







