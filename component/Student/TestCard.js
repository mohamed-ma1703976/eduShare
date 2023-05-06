import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const TestCard = ({ test }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {test.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {test.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Due date: {test.dueDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Take Test</Button>
      </CardActions>
    </Card>
  );
};

export default TestCard;
