import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box, ButtonBase } from '@mui/material';
import { motion } from 'framer-motion';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function MyStudents() {
  const [students, setStudentys] = useState([]);
  const [coursess, setCoursess] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const router = useRouter();

  let currentId = auth.currentUser.uid;

  async function fetchCourses() {
    const compationsCollection = collection(db, 'Course');
    const compationsSnapshot = await getDocs(compationsCollection);
    const compationsList = compationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setCoursess(compationsList);
  }

  async function fetchStudents() {
    const compationsCollection = collection(db, 'Student');
    const compationsSnapshot = await getDocs(compationsCollection);
    const compationsList = compationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setStudentys(compationsList);
  }

  async function fetchInstruuctors() {
    const compationsCollection = collection(db, 'Instructor');
    const compationsSnapshot = await getDocs(compationsCollection);
    const compationsList = compationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setInstructor(compationsList);
  }

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchInstruuctors();
  }, []);

  let nameOfCourse = instructor.find((s) => s.id === currentId)?.attributes.myCourse[0]?.coursname[0]; //console.log(idOfCourse)

  let courseid = coursess.find((c) => c.attributes.CourseTitle === nameOfCourse)?.id;
  console.log(courseid);

  let registeredStudents = students.filter((s) => s.attributes.registerdcourses.includes(courseid));

  console.log(registeredStudents);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleStudentCardClick = (id) => {
    router.push(`/Profile/${id}`);
  };
  return (
    <div>
      <Grid container>
        {registeredStudents.map((s, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={s.id}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                <ButtonBase
                  component="div"
                  sx={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => router.push(`/Profile/${s.id}`)}
                >
                  <Card sx={{ minWidth: 300, margin: '16px' }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography variant="h5" component="div">
                          {s.attributes.firstName} {s.attributes.lastName}
                        </Typography>
                        <Box>
                          <MessageIcon sx={{ marginRight: 1 }} />
                          <NotificationsIcon />
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone: {s.attributes.phone}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email: {s.attributes.email}
                      </Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
  
      
    }
    
    export default MyStudents;