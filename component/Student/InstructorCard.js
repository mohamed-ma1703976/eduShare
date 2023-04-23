import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';

export default function InstructorCard({ instructor }) {
    const { title, displayName, img, id } = instructor;
  
    const url = 'https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506__480.jpg';
  
    return (
      <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '300px', cursor: 'pointer', width: "300" }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
            <Avatar
              src={url} // Replace 'url' with the image URL from the instructor object if available
              alt={name}
              sx={{ width: 128, height: 128 }}
            />
          </Box>
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              {title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {displayName}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    );
  };