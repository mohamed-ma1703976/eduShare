import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Rating, Button, CircularProgress } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { getFirestore, doc, getDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../Firebase/Firebase';
import { getAuth } from "firebase/auth";
import { app } from "../../../Firebase/Firebase";
import Loading from "../../../component/Loading "; // Import Loading component
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CoursePage = ({ course }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const [rating, setRating] = useState(0);

  const [enrollButtonDisabled, setEnrollButtonDisabled] = React.useState(false);
  const [showReg, setShowReg] = React.useState(false);
  const [israted, setIsRated] = React.useState(false);

  const [students, setStudents] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [showRating, setShowRating] = useState(true);

  const [loading, setLoading] = React.useState(true);
  const [userId, setUserId] = React.useState(null);
  const [instructors, setInstructors] = React.useState([]);
  const [enrolledCourse, setEnrolledCourse] = React.useState({
    registerdcourses: []
  });

  const [instructorCourses, setInstructorCourses] = React.useState({
    myCourse: []
  });
  const [courseRating, setCourseRating] = React.useState({
    rates: course.rates
  });

  // console.log("course id", course.fileUrl)
  // console.log("user id", userId)
  // console.log("state", enrolledCourse)
  // console.log("students data", students)
  // console.log("Instructors data", instructors)
  // console.log("instructorCourses", instructorCourses)



  const currentStudentRegisterdCourses = students.find(s => s.id === userId)?.attributes?.registerdcourses

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRating(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
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

    const fetchCourses = async () => {
      const studentCollection = collection(db, 'Course');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setCourses(studentList);
      setLoading(false);
    };

    const fetchInstructors = async () => {
      const instructorCollection = collection(db, 'Instructor');
      const instructorSnapshot = await getDocs(instructorCollection);
      const instructorsList = instructorSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setInstructors(instructorsList);
      setLoading(false);
    };

    fetchCourses()
    fetchStudents();
    fetchInstructors();
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Set timeout to 5 seconds
  }, []);


  React.useEffect(() => {
    if (currentStudentRegisterdCourses) {
      let test = currentStudentRegisterdCourses?.includes(course.id)

      console.log(test)
      setShowReg(test)
    }

  }, [course.id, currentStudentRegisterdCourses])

  if (loading) {
    return <Loading />; // Render Loading component
  };


  async function handelAddCourse(id, courseName, instructorNameOfCourse) {
    // console.log(id);
    // console.log(courseName);
    // console.log(instructorNameOfCourse);

    let isReg = currentStudentRegisterdCourses?.includes(id)
    if (isReg) {
      alert("You are already registerd in this course ")

    } else {
      setEnrollButtonDisabled(true)

      const InstructorId = instructors.find(s => s.attributes.firstName === instructorNameOfCourse)?.id
      console.log("check me", InstructorId)

      setEnrolledCourse((prevState) => ({
        ...prevState,
        registerdcourses: prevState.registerdcourses
          ? [...prevState.registerdcourses, id]
          : [id],
      }));


      const courseObj = {
        [courseName]: [userId]
      };
      setInstructorCourses(prevState => ({
        ...prevState,
        myCourse: [...prevState.myCourse, courseObj]
      }));





      let collectedData = {
        registerdcourses: Array.isArray(enrolledCourse.registerdcourses)
          ? [...enrolledCourse.registerdcourses, id]
          : [id],

      };

      let collectedData1 = {
        myCourse: [
          ...instructorCourses.myCourse,
          { coursname: [courseName], studentsId: [userId] }
        ]
      };


      try {
        if (userId) {
          const studentRef = doc(db, 'Student', userId);
          await updateDoc(studentRef, collectedData);

        }
      } catch (err) {
        console.log(err);
      }

      try {
        if (userId) {
          const instructorRef = doc(db, 'Instructor', InstructorId);
          await updateDoc(instructorRef, collectedData1);
        }
      } catch (err) {
        console.log(err);
      }

      router.push('/Student')
    }


  }

  // console.log('my courses state', instructorCourses)


  console.log(courseRating)

  const ratedCourses = courses.find(c => c.id === course.id)?.attributes?.rates?.some(obj => obj?.id === userId)

  const handleRatingChange = async (event, newValue) => {

    if (ratedCourses) {
      return
    } else {
      setRating(newValue);
      setIsRated(true)




      console.log(ratedCourses)
      setCourseRating((prevState) => ({
        ...prevState,
        rates: prevState.rates
          ? [...prevState.rates, newValue]
          : [newValue],
      }));
      let collectedData = {
        rates: Array.isArray(courseRating.rates)
          ? [...courseRating.rates, { id: userId, rating: newValue }]
          : [{ id: userId, rating: newValue }],
      }

      try {
        if (userId) {
          const studentRef = doc(db, 'Course', course.id);
          await updateDoc(studentRef, collectedData);

        }
      } catch (err) {
        console.log(err);
      }
    }

    router.reload()

  };




  console.log(rating)
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
                image={course.fileUrl || "https://via.placeholder.com/900x200"}
                alt={course.CourseTitle}
              />


              <Typography variant="h4" gutterBottom>
                {course.CourseTitle}
              </Typography>



              {ratedCourses ? (
                showRating && (
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: 'green',
                      fontWeight: "900"
                    }}
                  >
                    Thanks for Rating the Course !
                  </Typography>
                )
              ) : (
                <Rating
                  name="star-rating"
                  value={rating}
                  onChange={handleRatingChange}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  icon={<StarIcon fontSize="inherit" />}
                />

              )
              }




              <Typography variant="h6" gutterBottom>
                Instructor: {course.InstructorName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {course.CourseDescription}
              </Typography>
              {/* Add more course content here */}

              <Box mt={3}>
                <Button variant="contained" sx={{ backgroundColor: '#1ABC9C', marginRight: 2 }} onClick={() => handelAddCourse(course.id, course.CourseTitle, course.InstructorName)} disabled={showReg}>
                  {showReg ? "Registerd" : "ENROLL"}
                </Button>
                {/* <Button variant="contained" sx={{ backgroundColor: '#1ABC9C' }}>
                  Join Live Session
                </Button> */}
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



