import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const EventCard = ({ event }) => {
    const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png'; // Add the default image URL here
    return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={event.coverImage || defaultImage}
        alt="Event cover"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Start Time: {event.start}
        </Typography>
        <Typography variant="body1" gutterBottom>
          End Time: {event.end}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Description: {event.description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Link: {event.link}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;