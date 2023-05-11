import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
    const { id, Title, Instructor,instruuctorName, img } = blog;
    const [InstructorName, setInstructorName] = useState('');
  console.log(instruuctorName)
    useEffect(() => {
      const fetchInstructorName = async () => {
        const db = getFirestore();
        const instructorRef = doc(db, 'Instructor', Instructor);
        const instructorDoc = await getDoc(instructorRef);
        setInstructorName(instructorDoc.data().displayName);
      };
  
      if (Instructor && typeof Instructor === 'string') {
        fetchInstructorName();
      } else {
        console.error('Invalid Instructor prop:', Instructor);
      }
    }, [Instructor]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png'; // Add the default image URL here

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/Student/blog/${id}`} passHref>
        
      <motion.div
    initial={{ opacity: 0, y: 20, scale: 1 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}
  >
             <Card
            sx={{
              minHeight: '100%',
              maxHeight: '400px',
              minWidth: '250px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 2,
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: '#ffffff',
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={img ? img : defaultImage} // Use the provided image, or use the default image if not provided
              alt={Title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography gutterBottom variant="h6" component="div">
                {Title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                By: {instruuctorName}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </Grid>
  );
};

export default BlogCard;
