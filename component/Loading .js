import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import useTypewriter from 'react-typewriter-hook';

const Loading = () => {
  const EduShareText = useTypewriter('EduShare', 150);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#FDFEFE',
      }}
    >
      <span
        style={{
          color: '#1ABC9C',
          fontWeight: '800',
          fontSize: '7rem',
          textAlign: 'center',
        }}
      >
        {EduShareText}
      </span>
      <CircularProgress size={70} color="success" style={{ marginTop: '1rem' }} />
    </Box>
  );
};

export default Loading;
