import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import Card from '../../component/Card';
import Loading from "../../component/Loading ";
import LineChartComponent from '../../component/Admin/LineChartComponent';
import InstructorCard from "../../component/Student/InstructorCard";
import StudentCard from "../../component/Admin/StudentCard";
import { db } from '../../Firebase/Firebase';

function AdminDashBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [instructorsSnapshot, instructorsLoading, instructorsError] = useCollection(collection(db, "Instructor"));
  const instructors = instructorsSnapshot?.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((instructor) => instructor.title) || [];

  const [studentsSnapshot, studentsLoading, studentsError] = useCollection(collection(db, "Student"));
  const students = studentsSnapshot?.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((student) => student.displayName) || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration (3000ms) as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Box>
          <Navbar />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Card />
              <Box sx={{ mt: 2 }}>
                {instructors.length > 0 && (
                  <>
                    <Typography
                      variant="h5"
                      mt={4}
                      gutterBottom
                      sx={{
                        fontSize: "30px",
                        fontWeight: "1000",
                        color: "#454545",
                      }}
                    >
                      Top Instructors
                    </Typography>
                    <Grid container spacing={2}>
                      {instructors.map((instructor) => (
                        <Grid item xs={12} sm={6} md={4} key={instructor.id}>
                          <InstructorCard instructor={instructor} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </Box>
              <Box sx={{ mt: 2 }}>
                {students.length > 0 && (
                  <>
                    <Typography
                      variant="h5"
                      mt={4}
                      gutterBottom
                      sx={{
                        fontSize: "30px",
                        fontWeight: "1000",
                        color: "#454545",
                      }}
                    >
                      Latest Students
                    </Typography>
                    <Grid container spacing={2}>
                      {students.map((student) => (
                        <Grid item xs={12} sm={6} md={4} key={student.id}>
                          <StudentCard student={student} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default AdminDashBoard;
