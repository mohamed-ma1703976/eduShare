import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StudentCard({ student }) {
  const { displayName, Title, img, id, profilePicture } = student;

  const url = 'https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506__480.jpg';

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const avatarVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <Link href={`Profile/${id}`}>
      <ButtonBase component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Card
          component={motion.div}
          initial="initial"
          animate="animate"
          variants={cardVariants}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '250px',
            cursor: 'pointer',
            width: '300px',
            bgcolor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
            <Avatar
              component={motion.div}
              whileHover="hover"
              variants={avatarVariants}
              src={profilePicture} // Replace 'url' with the image URL from the student object if available
              alt={name}
              sx={{ width: 125, height: 128 }}
            />
          </Box>
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              {displayName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {Title}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </Link>
  );
};
