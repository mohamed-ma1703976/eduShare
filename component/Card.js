import React from 'react';
import { CircularProgress, Grid ,Box,Typography ,ResponsiveContainer} from '@mui/material';
import CourseDialog from './CourseDialog';
import EventDialog from './EventDialog';
import AnnounceDialog from './AnnounceDialog';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AchievementCard from './AchievementCard';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import TodoList from './TodoList/TodoList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

function Card() {
  const [courses, setCourses] = React.useState([]);
  const [compat, setCompat] = React.useState([]);
  const [admin, setAdmin] = React.useState([]);


  React.useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'Course');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesList);
    };

    const fetchad = async () => {
      const coursesCollection = collection(db, 'Admin');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAdmin(coursesList);
    };


    const fetchCompa = async () => {
      const coursesCollection = collection(db, 'Compations');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompat(coursesList);
    };

    fetchCourses();
    fetchCompa()
    fetchad()
  }, []);

 // const numberOfCourses = courses;

 return (
  <Box sx={{ m: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around">
          <CourseDialog />
          <EventDialog />
          <AnnounceDialog />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="space-around">
          <Grid item xs={12} sm={6} md={4}>
            <AchievementCard number={courses.length} description="Completed Courses" color="#1ABC9C" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AchievementCard number={compat.length} description="Published Competitions" color="#FEC64F" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AchievementCard number={admin.length} description="Numbers Of Admins" color="#374557" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <TodoList />
        </Grid>
      </Grid>
      </Grid>
  </Box>
);
 }

export default Card 