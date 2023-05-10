import React, { useState, useEffect } from "react";
import { db } from '../../Firebase/Firebase';
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import WebBanner from "../../component/Instructors/webBanner";
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import { Box, CircularProgress, Stack } from "@mui/material";
import {
  Card, CardContent, Typography, Grid, Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, CardActions
} from "@mui/material";
import { getDocs, collection, where, query, doc, updateDoc, addDoc } from "firebase/firestore";
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
import Pending from "../../component/Instructors/Pending";
import Loading from '../../component/Loading ';

export default function instructorDashboard() {
  const [competitions, setCompetitions] = useState([]);
  const [students, setStudents] = useState([]);
  const [coursess, setCoursess] = useState([]);
  const [showname, setShowName] = useState(false);

  const [statusCheck, setstatusCheck] = useState(true);
  const [statusValue, setStatusValue] = useState('');
  const [totalStudents, setTotalStudents] = useState(0);
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [joinedComp, setJoinedCom] = useState({
    joinedCompations: []
  });

  const [userId, setUserId] = useState(null);
  const [numCourses, setNumCourses] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCompation, setSelectedCompation] = useState(null);
  const instructorFirstName = instructors.find(s => s.id === userId)?.attributes.firstName
  const instructorLastName = instructors.find(s => s.id === userId)?.attributes.lastName
  const JoindComputionByInst = instructors.find(s => s.id === userId)?.attributes.joinedCompations ?? []
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
  const [instructorCourses, setInstructorCourses] = useState([]);

  async function fetchCourseData() {
    const instructorCoursesSnapshot = await getDocs(query(collection(db, "Course"), where("instructorId", "==", userId)));

    // Update the state with the number of courses
    setNumCourses(instructorCoursesSnapshot.size);

    // Update the state with the list of courses
    const coursesList = instructorCoursesSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setInstructorCourses(coursesList);

    // ...
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
  async function fetchStudents() {
    const compationsCollection = collection(db, "Student");
    const compationsSnapshot = await getDocs(compationsCollection);
    const compationsList = compationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setStudents(compationsList);
  }
  async function fetchCourses() {
    const compationsCollection = collection(db, "Course");
    const compationsSnapshot = await getDocs(compationsCollection);
    const compationsList = compationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setCoursess(compationsList);
  }
  useEffect(() => {
    fetchCompetitions();
    fetchStudents();
    fetchCourses();
  }, []);

  console.log(students)
  let nameOfCourse = instructors.find(s => s.id === userId)?.attributes.myCourse[0]?.coursname[0]  //console.log(idOfCourse)
  useEffect(() => {
    if (nameOfCourse !== undefined) {
      setShowName(true)
    }
  }, [nameOfCourse])

  let courseid = coursess.find(c => c.attributes.CourseTitle === nameOfCourse)?.id
  console.log(courseid)

  let registeredStudents = students.filter(s => s.attributes.registerdcourses.includes(courseid));
  let studentNumber = registeredStudents.length;

  console.log(registeredStudents)

  const handleJoinSubmit = async (id, congMessage) => {
    console.log(id)
    console.log(congMessage)

    if (JoindComputionByInst.includes(id)) {
      alert("you already join this compation")
      //setOpenDialog(true);
    } else {
      setJoinedCom((prevState) => ({
        ...prevState,
        //joinedCourses: [...prevState.joinedCourses, id],

        joinedCompations: prevState.joinedCompations
          ? [...prevState.joinedCompations, id]
          : [id],
      }));

      let collectedData = {
        joinedCompations: Array.isArray(joinedComp.joinedCompations)
          ? [...joinedComp.joinedCompations, id]
          : [id],
      };


      let collectedData1 = {
        name: instructorFirstName + "  " + instructorLastName,
        achievementcard: congMessage,
        id: userId


      };

      try {
        const compationCollection = doc(db, 'Instructor', userId);
        await updateDoc(compationCollection, collectedData);
        //router.reload();
      } catch (err) {
        console.log(err);
      }

      try {
        const compationCollection = collection(db, 'AchievementCard');
        await addDoc(compationCollection, collectedData1);
        //router.reload();
      } catch (err) {
        console.log(err);
      }
      handleCloseDialog();
    }

  };



  console.log(instructors);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
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
      setIsLoading(false);

      instructorsList.forEach(s => {
        if (s.id === userId) {
          if (s.attributes.status === 'Active') {
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
  return (
    isLoading ? (
      <Loading />
    ) : (
      <div>
        {statusCheck ? (
          <Pending />
        ) : (
          <Box>
            <InstNav />
            <WebBanner />
            <Stack direction="row" spacing={2}>
              <InstSidebar />

              <Stack direction="column" spacing={2}>
                <Card sx={{ minWidth: 500, margin: 2, height: 170 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Total Students
                    </Typography>
                    <Typography variant="h2" component="div">
                      {studentNumber}
                    </Typography>
                  </CardContent>
                </Card>


                {showname ? <Card sx={{ minWidth: 500, margin: 2, height: 170 }}>
                  <CardContent>



                    <Typography variant="h5" component="div">
                      My Course
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ margin: "10px 0 0 0 " }}>
                      {nameOfCourse}
                    </Typography>


                  </CardContent>

                </Card> : ""}


                <Grid item xs={12} sm={6} md={6}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ marginBottom: 2 }}
                  >
                    Competitions
                  </Typography>
                  <Grid container spacing={2}>
                    {competitions.map((competition) => (
                      <Grid item xs={12} sm={6} md={4} key={competition.id}>
                        <Card>
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
                  </Grid>
                </Grid>


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
              </Stack>
            </Stack>
          </Box>
        )}
      </div>
    )
  );
}
