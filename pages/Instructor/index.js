import React, { use, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { db } from '../../Firebase/Firebase'
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase"
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import { Box, CircularProgress, Stack } from "@mui/material";
import { Card, CardContent, Typography, Grid , Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, CardActions} from "@mui/material";
import { getDocs, collection, where, query } from "firebase/firestore";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
export default function instructorDashboard() {
    const data = [
        { date: "01-01", students: 10 },
        { date: "01-02", students: 20 },
        { date: "01-03", students: 15 },
        { date: "01-04", students: 25 },
        { date: "01-05", students: 30 },
      ];
      const [competitions, setCompetitions] = useState([]);
    const [statusCheck, setstatusCheck] = useState(true)
    const [statusValue, setStatusValue] = useState('')
    const [totalStudents, setTotalStudents] = useState(0);

    const [instructors, setInstructors] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    console.log(instructors)

    const [userId, setUserId] = useState(null);
    const [numCourses, setNumCourses] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCompation, setSelectedCompation] = useState(null);
    
    const handleJoinCompation = (compation) => {
        setSelectedCompation(compation);
        setOpenDialog(true);
    };
    
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    async function fetchCourseData() {
      const instructorCourses = await getDocs(query(collection(db, "Course"), where("instructorId", "==", userId)));
  
      // Update the state with the number of courses
      setNumCourses(instructorCourses.size);
      
        let totalStudentsCount = 0;
        for (const courseDoc of instructorCourses.docs) {
          const courseData = courseDoc.data();
          if (courseData.students) {
            totalStudentsCount += courseData.students.length;
          }
        }
      
        setTotalStudents(totalStudentsCount);
      }
      async function fetchCompetitions() {
        const compationsCollection = collection(db, "Compations");
        const compationsSnapshot = await getDocs(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          attributes: doc.data(),
        }));
        setCompetitions(compationsList);
      }
      useEffect(() => {
        fetchCompetitions();
      }, []);            
      
    useEffect(() => {
        // Listen for changes in the authentication state
        const auth = getAuth(app);

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, get the user ID
                setUserId(user.uid);
            } else {
                // User is signed out, set user ID to null
                setUserId(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);
    console.log(userId)

    useEffect(() => {
        fetchCourseData();
      }, []);

    useEffect(() => {
        const fetchInstructors = async () => {
            const instructorCollection = collection(db, 'Instructor');
            const instructorSnapshot = await getDocs(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setInstructors(instructorsList);
            setLoading(false);

            instructorsList.forEach(s => {

                if (s.id === userId) {
                    if (s.attributes.status === 'Active') {
                        console.log(s.attributes.status)

                        setstatusCheck(false);
                        setStatusValue(s.attributes.status);
                    } else {
                        setstatusCheck(true);
                    }
                } 
            });

        };

        fetchInstructors();
    }, [userId]);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "250px 0 0 570px" }} /></div>;




    console.log(instructors);

    return (
        <div>
          <div>
            {statusCheck ? (
              <p>Your request is pending</p>
            ) : (
                <Box>
            <InstNav />

            <Stack direction="row" spacing={2}>
              <InstSidebar />

              {/* Wrap the cards in a Stack with column direction */}
              <Stack direction="column" spacing={2}>
                <Card sx={{ minWidth: 500, margin: 2, height: 170 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Total Students
                      </Typography>
                      <Typography variant="h2" component="div">
                        {totalStudents}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 500, margin: 2, height: 170 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Number of Courses
                  </Typography>
                  <Typography variant="h2" component="div">
                    {numCourses}
                  </Typography>
                </CardContent>
                </Card>
                <Typography variant="h4" component="div" sx={{ margin: "30px 0" }}>
        Competitions
      </Typography>
      

      
        
          
        <Grid container spacing={2}>
        {competitions.slice(0, 3).map((competition) => (
    <Grid item xs={4} sm={12} md={4} key={competition.id}>
                    <Card
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                                Competition Type: {competition.attributes.CompationType}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                                {competition.attributes.CompationQuestion}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => handleJoinCompation(competition)}
                            >
                                Join This Competition
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        

        <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Join Competition</DialogTitle>
            <DialogContent>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                    Competition Type: {selectedCompation?.attributes?.CompationType}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                    Question: {selectedCompation?.attributes?.CompationQuestion}
                </Typography>
                {/* Add additional form fields for joining the competition */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>No</Button>
                <Button
                    onClick={() => handleJoinSubmit(selectedCompation?.id, selectedCompation?.attributes.AchivmentCard)}
                    variant="contained"
                    color="primary"
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    
        </Grid>
    
              </Stack>
                  <Card sx={{ minWidth: 900, margin: 2, height: 400}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Student Registration Trend
                      </Typography>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          width={500}
                          height={300}
                          data={data}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="students"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                
                </Stack>
              
              </Box>
            )}
          </div>
        </div>
      );
}
