import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
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

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'Course');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesList);
      setLoading(false);
    };


    const fetchCompa = async () => {
      const coursesCollection = collection(db, 'Compations');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompat(coursesList);
      setLoading(false);
    };

    fetchCourses();
    fetchCompa()
  }, []);

 // const numberOfCourses = courses;

 if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;

    return (
        <Grid container spacing={1}>
            <Grid container spacing={2} sx={{marginLeft:"9px"}}>
                <Grid item xs={3}>
                    <CourseDialog />
                </Grid>
                <Grid item xs={3}>
                    <EventDialog />
                </Grid>
                <Grid item xs={3}>
                    <AnnounceDialog />
                </Grid>
                <div style={{margin:"8px 10px 0 auto" ,width:"22%"}}  >
                    <Calendar />
                </div>
                
            </Grid>
           
            <Grid container alignContent={'center'} style={{ marginTop: '-250px' }}>
      <Grid item xs={3} style={{margin:"30px 0 0 0"}}>
        <AchievementCard
          
          number={courses.length}
          description="Completed Courses"
          color="#1ABC9C"
        />
      </Grid>
                <Grid item xs={3} style={{margin:"30px 0 0 0"}}>
                    <AchievementCard number={compat.length} description="Publised Compations" color="#FEC64F" />
                </Grid>
                {/* <Grid item xs={3} style={{margin:"3px 0 0 0"}}>
                    <AchievementCard number="-" description="Publised Announcments" color="#374557" />
                </Grid> */}
            </Grid>
            <Grid container style={{ marginLeft: "-200px" }}>
                <TodoList />
            </Grid>
        </Grid>
    )
}

export default Card 