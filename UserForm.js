import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const workoutTypes = [
  'Running', 'Cycling', 'Swimming', 'Yoga'
];

const UserForm = ({ addWorkout }) => {
  const [name, setName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ name, workoutType, minutes: parseInt(minutes) });
    setName('');
    setWorkoutType('');
    setMinutes('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="User Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField
        select
        label="Workout Type"
        value={workoutType}
        onChange={(e) => setWorkoutType(e.target.value)}
        required
      >
        {workoutTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Workout Minutes"
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Add Workout</Button>
    </Box>
  );
};

export default UserForm;
