import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box, ButtonBase } from '@mui/material';
import { motion } from 'framer-motion';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendMessage from '../SendMessage';

function MyStudents() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [sendMessageOpen, setSendMessageOpen] = useState(false);
  const router = useRouter();

  let currentId = auth.currentUser.uid;

  async function fetchCourses() {
    const coursesCollection = collection(db, 'Course');
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setCourses(coursesList);
  }

  async function fetchStudents() {
    const studentsCollection = collection(db, 'Student');
    const studentsSnapshot = await getDocs(studentsCollection);
    const studentsList = studentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setStudents(studentsList);
  }

  async function fetchInstructors() {
    const instructorsCollection = collection(db, 'Instructor');
    const instructorsSnapshot = await getDocs(instructorsCollection);
    const instructorsList = instructorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setInstructor(instructorsList);
  }

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchInstructors();
  }, []);

  let nameOfCourse = instructor.find((i) => i.id === currentId)?.attributes.myCourse[0]?.coursname[0];
  let courseId = courses.find((c) => c.attributes.CourseTitle === nameOfCourse)?.id;

  let registeredStudents = students.filter((s) => s.attributes.registerdcourses.includes(courseId));

  const handleStudentCardClick = (id) => {
    router.push(`/Profile/${id}`);
  };

  const handleSendMessageClick = (id) => {
    setSelectedStudentId(id);
    setSendMessageOpen(true);
  };

  const handleSendMessageClose = () => {
    setSendMessageOpen(false);
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
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: index * 0.1 }}
              >
                <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }}>
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
                        <Box sx={{ display: 'flex' }}>
                          <MessageIcon
                            sx={{ marginRight: 1 }}
                            onClick={() => handleSendMessageClick(s.id)}
                          />
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
      {selectedStudentId && (
        <SendMessage
        open={sendMessageOpen}
        handleClose={handleSendMessageClose}
        toId={selectedStudentId}
      />
      )}
    </div>
  );
}
export default MyStudents;    