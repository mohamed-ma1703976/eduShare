import React, { useContext } from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CourseCard from "../../component/Student/CourseCard";
import { AuthContext } from "../../hooks/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../../component/Student/ImageCarousel";
import InstructorCard from '../../component/Student/InstructorCard';
import { db, collection } from "../../Firebase/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ReactLoading from "react-loading";
import Loading from "../../component/Loading ";
// Add this custom hook
import useIsMounted from "../../hooks/useIsMounted";

export default function StudentDashboard() {
  const { userId } = useContext(AuthContext);

  const [coursesSnapshot, loading, error] = useCollection(collection(db, "Course"));
  const [instructorsSnapshot, instructorsLoading, instructorsError] = useCollection(collection(db, "Instructor"));

  const courses = coursesSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];
  const instructors = instructorsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  const sortedCourses = courses.sort((a, b) => b.id - a.id);
  const trendingCourses = courses.sort((a, b) => b.enrolledStudents - a.enrolledStudents);

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
  const isMounted = useIsMounted();


  return (
    <>
      {loading || instructorsLoading ? (
        <Loading />
      ) : (
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
                  <Typography variant="h5" gutterBottom style={{ fontSize: '30px', fontWeight: "1000", margin: "0 400px 0 0", color: "#454545" }}>
                    Latest Courses
                  </Typography>
                  <Slider {...settings}>
                    {sortedCourses.map((course) => (
                      <Box key={course.id} sx={{ padding: 1 }}>
                        <CourseCard course={course} />
                      </Box>
                    ))}
                  </Slider>
  
                  <Typography variant="h5" mt={4} gutterBottom style={{ fontSize: '30px', fontWeight: "1000", margin: "0 400px 0 0", color: "#454545" }}>
                    Trending Courses
                  </Typography>
                  <Slider {...settings}>
                    {trendingCourses.map((course) => (
                      <Box key={course.id} sx={{ padding: 1 }}>
                        <CourseCard course={course} />
                      </Box>
                    ))}
                  </Slider>
  
                  {instructors.length > 0 && (
                    <>
                      <Typography variant="h5" mt={4} gutterBottom style={{ fontSize: '30px', fontWeight: "1000", margin: "0 400px 0 0", color: "#454545" }}>
                        Top Instructors
                      </Typography>
                      <Slider {...settings}>
                        {instructors.map((instructor) => (
                          instructor.hasOwnProperty('title') && instructor.title ? (
                            <Box key={instructor.id} sx={{ padding: 1 }}>
                              <InstructorCard instructor={instructor} />
                            </Box>
                          ) : null
                        ))}
                      </Slider>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
  
      {error && (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <Typography variant="h5">Error: {error.message}</Typography>
        </Box>
      )}
  
      {instructorsError && (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <Typography variant="h5">Error: {instructorsError.message}</Typography>
        </Box>
      )}
    </>
  );
}  