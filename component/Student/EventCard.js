import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import ButtonBase from '@mui/material/ButtonBase';
import { motion } from 'framer-motion';
import { auth, collection, db } from "../../Firebase/Firebase";
import { getDocs } from "firebase/firestore";

const EventCard = ({ event }) => {
  const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png';

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [stu, setStu] = useState([]);
  React.useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'Student');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setStu(studentList);
    };
    fetchStudents();
  }, []);

  let userId = auth?.currentUser?.uid;
  const currentStudentRegisterdCourses = stu.find(s => s.id === userId)?.attributes?.registerdcourses;
  let test = currentStudentRegisterdCourses?.includes(event.id);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={`/Student/Event/${event.id}`} passHref>
        <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }}>
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
                "&::after": {
                  content: "'registered'",
                  display: test ? "block" : "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255, 0, 0, 0.5)",
                  color: "#fff",
                  fontSize: "1.5rem",
                  
fontWeight: "bold",
textAlign: "center",
paddingTop: "50%",
opacity: 0,
transition: "opacity 0.2s ease",
},
"&:hover::after": {
opacity: 1,
},
}}
component={motion.div}
initial="initial"
animate="animate"
>
<CardMedia
component="img"
height="200"
image={event.coverImage || defaultImage}
alt="Event cover"
/>
<CardContent sx={{ flex: 1 }}>
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
</CardContent>
</Card>
</motion.div>
</ButtonBase>
</Link>
</Grid>
);
};

export default EventCard;