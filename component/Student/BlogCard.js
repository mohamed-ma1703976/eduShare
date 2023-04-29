import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  const { id, Title, Instructor, img } = blog;
  const [InstructorName, setInstructorName] = useState('');

  useEffect(() => {
    const fetchInstructorName = async () => {
      const instructorDoc = await getDoc(Instructor);
      setInstructorName(instructorDoc.data().displayName);
    };

    if (Instructor) {
      fetchInstructorName();
    }
  }, [Instructor]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/Student/blog/${id}`} passHref>
        <motion.div variants={cardVariants} initial="hidden" animate="visible" style={{ textDecoration: 'none' }}>
          <Card sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2, borderRadius: 2, overflow: 'hidden', bgcolor: '#ffffff' }}>
            <CardMedia
              component="img"
              height="200"
              image={img}
              alt={Title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {Title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                By: {InstructorName}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </Grid>
  );
};

export default BlogCard;
