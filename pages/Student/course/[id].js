import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Rating, Button } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';

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

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/courses');
  const data = await res.json();
  const paths = data.data.map((course) => ({ params: { id: course.id.toString() } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/api/courses/${params.id}`);
  const data = await res.json();
  const course = {
    ...data.data.attributes,
    img: 'https://via.placeholder.com/600x300', // Replace this with a real image URL from the course data
  };

  return { props: { course }, revalidate: 1 };
}

export default CoursePage;
