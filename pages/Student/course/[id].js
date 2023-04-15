import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Rating, Button } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';

const CoursePage = ({ course }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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
                <Button variant="contained" sx={{ backgroundColor: '#1ABC9C', marginRight: 2 }}>
                  Add
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