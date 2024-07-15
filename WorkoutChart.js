import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const WorkoutChart = ({ workouts, selectedUser, setSelectedUser }) => {
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <List component="nav">
        {workouts.map((user) => (
          <ListItem
            key={user.id}
            button
            selected={selectedUser && selectedUser.id === user.id}
            onClick={() => handleUserClick(user)}
          >
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
      {selectedUser && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={selectedUser.workouts}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="minutes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default WorkoutChart;
