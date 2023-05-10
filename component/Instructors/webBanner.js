import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useTypewriter from 'react-typewriter-hook';

const WebBanner = () => {
  const bannerVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  const sentences = [
    'Welcome to EduShare',
    "Let's make the education",
    "More Accessible for everyone"
  ];

  const [index, setIndex] = React.useState(0);
  const text = useTypewriter(sentences[index], {
    loop: true,
    typingDelay: 1000,
    deleteSpeed: 50,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={bannerVariants}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          backgroundImage:
            "url('https://i.ibb.co/Ms7qnYz/Colorful-Shapes-Header-Banner.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          color="white"
          sx={{ color: "#1ABC9C", fontWeight: "800", margin: "0 0 0 -23px", cursor: "pointer" }}
        >
          {text}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default WebBanner;
