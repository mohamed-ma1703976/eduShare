import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Rating, Button } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { getFirestore, doc, getDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import { getAuth } from "firebase/auth";
import { app } from "../../../Firebase/Firebase"
const CoursePage = ({ course }) => {
  const router = useRouter();



  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const [enrollButtonDisabled, setEnrollButtonDisabled] = React.useState(false);

  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [userId, setUserId] = React.useState(null);
  const [enrolledCourse, setEnrolledCourse] = React.useState({
    registerdcourses: []
  });

  console.log("course id", course.id)
  console.log("user id", userId)
  console.log("state", enrolledCourse)
  console.log("students data", students)


  const currentStudentRegisterdCourses = students.find(s => s.id === userId)?.attributes.registerdcourses


  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
        setEnrolledCourse({ registerdcourses: currentStudentRegisterdCourses || [] });

      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, [students]);



  React.useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'Student');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setStudents(studentList);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;






  async function handelAddCourse(id) {
    console.log(id);
    setEnrollButtonDisabled(true);
    setEnrolledCourse((prevState) => ({
      ...prevState,
      registerdcourses: prevState.registerdcourses
        ? [...prevState.registerdcourses, id]
        : [id],
    }));

    let collectedData = {
      registerdcourses: Array.isArray(enrolledCourse.registerdcourses)
        ? [...enrolledCourse.registerdcourses, id]
        : [id],
    };

    try {
      if (userId) {
        const studentRef = doc(db, 'Student', userId);
        await updateDoc(studentRef, collectedData);
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div>
      <Box>
        <StuNav />
        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>
          <Grid item xs={10}>
            <Box>
              {/* Image Holder */}
              <CardMedia
                component="img"
                height="200"
                image={course.CourseImageURL || "https://via.placeholder.com/900x200"}
                alt={course.CourseTitle}
              />

              <Typography variant="h4" gutterBottom>
                {course.CourseTitle}
              </Typography>
              <Rating value={course.Rating} precision={0.1} readOnly />
              <Typography variant="h6" gutterBottom>
                Instructor: {course.InstructorName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {course.CourseDescription}
              </Typography>
              {/* Add more course content here */}

              <Box mt={3}>
                <Button variant="contained" sx={{ backgroundColor: '#1ABC9C', marginRight: 2 }} onClick={() => handelAddCourse(course.id)} disabled={enrollButtonDisabled}>
                  Enroll
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#1ABC9C' }}>
                  Join Live Session
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const courseId = params.id;
  const courseRef = doc(db, 'Course', courseId);
  const courseSnapshot = await getDoc(courseRef);

  if (!courseSnapshot.exists()) {
    return {
      notFound: true,
    };
  }

  const course = {
    id: courseSnapshot.id,
    ...courseSnapshot.data(),
  };

  return {
    props: {
      course,
    },
  };
}

export default CoursePage;