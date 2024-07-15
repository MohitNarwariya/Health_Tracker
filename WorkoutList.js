import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, MenuItem, Box, Pagination } from '@mui/material';

const WorkoutList = ({ workouts }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredWorkouts = workouts
    .filter((workout) => workout.name.toLowerCase().includes(search.toLowerCase()))
    .filter((workout) => (filter ? workout.workouts.some(w => w.type === filter) : true));

  const paginatedWorkouts = filteredWorkouts.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <TextField
          select
          label="Filter by Workout Type"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {['Running', 'Cycling', 'Swimming', 'Yoga'].map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Workouts</TableCell>
              <TableCell>Number of Workouts</TableCell>
              <TableCell>Total Workout Minutes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedWorkouts.map((workout) => (
              <TableRow key={workout.id}>
                <TableCell>{workout.name}</TableCell>
                <TableCell>{workout.workouts.map(w => w.type).join(', ')}</TableCell>
                <TableCell>{workout.workouts.length}</TableCell>
                <TableCell>{workout.workouts.reduce((acc, curr) => acc + curr.minutes, 0)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredWorkouts.length / rowsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default WorkoutList;
