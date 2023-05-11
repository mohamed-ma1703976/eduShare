// FullScreenBackground.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const FullScreenBackground = ({ imageUrl, title, subTitle, buttonText }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', color: 'white', marginBottom: '20px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: 'white', marginBottom: '40px', maxWidth: '800px' }}
      >
        {subTitle}
      </Typography>
      <Button variant="contained" size="large" sx={{ backgroundColor: 'white' }}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default FullScreenBackground;
