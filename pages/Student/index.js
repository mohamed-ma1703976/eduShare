import React, { useContext } from "react";
import { Box, Card, Stack, Typography, Grid } from "@mui/material";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CourseCard from "../../component/Student/CourseCard";
import { AuthContext } from "../../hooks/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../../component/Student/ImageCarousel";

import { db, collection } from "../../Firebase/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export default function studentDashboard() {
  const { userId } = useContext(AuthContext);
  const [coursesSnapshot, loading, error] = useCollection(
    collection(db, "Course")
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const courses = coursesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const sortedCourses = courses.sort((a, b) => b.id - a.id);

  const trendingCourses = courses.sort(
    (a, b) => b.enrolledStudents - a.enrolledStudents
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
              <ImageCarousel />
              <Card />
              <Typography variant="h5" gutterBottom>
                Latest Courses
              </Typography>
              <Slider {...settings}>
                {sortedCourses.map((course) => (
                  <Box key={course.id} sx={{ padding: 1 }}>
                    <CourseCard course={course} />
                  </Box>
                ))}
              </Slider>
              <Typography variant="h5" gutterBottom mt={4}>
                Trending Courses
              </Typography>
              <Slider {...settings}>
                {trendingCourses.map((course) => (
                  <Box key={course.id} sx={{ padding: 1 }}>
                    <CourseCard course={course} />
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
