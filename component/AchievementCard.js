import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

export default function AchievementCard({icon,number,description , color}) {
  return (
    <Box sx={{ minWidth: 100 }} >
      <Card variant="outlined" style={{backgroundColor: color , marginLeft: "40px"}}>
      <CardContent color="white">
      <Icon>{icon}</Icon>
      <Typography variant="h5" component="div"   color = "white" >
        {number}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color = "white">
        {description}
      </Typography>
    </CardContent>

      </Card>
    </Box>
  );
}