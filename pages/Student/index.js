import React, { useContext } from "react";
import { Box, Card, Typography, Grid, CardContent } from "@mui/material";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CourseCard from "../../component/Student/CourseCard";
import BlogCard from "../../component/Student/BlogCard";
import { AuthContext } from "../../hooks/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstructorCard from "../../component/Student/InstructorCard";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import EventCard from "../../component/Student/EventCard";
import Loading from "../../component/Loading ";
import useIsMounted from "../../hooks/useIsMounted";
import WebBanner from "../../component/Student/WebBanner";
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";
export default function StudentDashboard() {
  const { userId } = useContext(AuthContext);

  const [coursesSnapshot, loading, error] = useCollection(
    collection(db, "Course")
  );
  const [instructorsSnapshot, instructorsLoading, instructorsError] =
    useCollection(collection(db, "Instructor"));
  const [blogsSnapshot, blogsLoading, blogsError] = useCollection(
    collection(db, "Blog")
  );
  const [eventsSnapshot, eventsLoading, eventsError] = useCollection(
    collection(db, "Events")
  );  
  const courses =
    coursesSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];
  const instructors =
    instructorsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) ||
    [];
  const latestBlogs =
    blogsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  const sortedCourses = courses.sort((a, b) => b.id - a.id);
  const trendingCourses = courses.sort(
    (a, b) => b.enrolledStudents - a.enrolledStudents
  );
  const events =
  eventsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];
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
    <PrivateRoute path="/secure">
      {loading || instructorsLoading || blogsLoading ? (
        <Loading />
      ) : (
        <div>
        <Box>
          <StuNav />
          <WebBanner />
          <Grid container>
              <Grid item xs={2}>
                <StuSideBar />
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Card>
                    <CardContent>
                      <Typography
                        variant="h5"
                        mt={4}
                        gutterBottom
                        sx={{
                          fontSize: "30px",
                          fontWeight: "1000",
                          margin: "0 400px 0 0",
                          color: "#454545",
                        }}
                      >
                        Latest Courses
                      </Typography>
                      <Slider {...settings}>
                        {sortedCourses.map((course) => (
                          <Box key={course.id} sx={{ padding: 1, width: "240px" }}>
                            <CourseCard course={course} />
                          </Box>
                        ))}
                      </Slider>
                      <Typography
                        variant="h5"
                        mt={4}
                        gutterBottom
                        sx={{
                          fontSize: "30px",
                          fontWeight: "1000",
                          margin: "0 400px 0 0",
                          color: "#454545",
                        }}
                      >
                        Trending Courses
                      </Typography>
                      <Slider {...settings}>
                        {trendingCourses.map((course) => (
                          <Box
                            key={course.id}
                            sx={{ padding: 1, width: "240px" }}
                          >
                            <CourseCard course={course} />
                          </Box>
                        ))}
                      </Slider>
  
                      {instructors.length > 0 && (
                        <>
                          <Typography
                            variant="h5"
                            mt={4}
                            gutterBottom
                            sx={{
                              fontSize: "30px",
                              fontWeight: "1000",
                              margin: "0 400px 0 0",
                              color: "#454545",
                            }}
                          >
                            Top Instructors
                          </Typography>
                          <Slider {...settings}>
                            {instructors.map((instructor) =>
                              instructor.hasOwnProperty("title") &&
                              instructor.title ? (
                                <Box
                                  key={instructor.id}
                                  sx={{ padding: 1 }}
                                >
                                  <InstructorCard instructor={instructor} />
                                </Box>
                              ) : null
                            )}
                          </Slider>
                        </>
                      )}
  
                      {latestBlogs.length > 0 && (
                        <>
                          <Typography
                            variant="h5"
                            mt={4}
                            gutterBottom
                            sx={{
                              fontSize: "30px",
                              fontWeight: "1000",
                              margin: "0 400px 0 0",
                              color: "#454545",
                            }}
                          >
                            Latest Blogs
                          </Typography>
                          <Slider {...settings}>
                            {latestBlogs.map((blog) => (
                              <Box
                                key={blog.id}
                                sx={{ padding: 1, width: "240px" }}
                              >
                                <BlogCard blog={blog} />
                              </Box>
                            ))}
                          </Slider>
                        </>
                      )}
                    </CardContent>
                  </Card>
                  {events.length > 0 && (
        <>
          <Typography
            variant="h5"
            mt={4}
            gutterBottom
            sx={{
              fontSize: "30px",
              fontWeight: "1000",
              margin: "0 400px 0 0",
              color: "#454545",
            }}
          >
           
           Upcoming Events
          </Typography>
          <Grid container spacing={3}>
            {events.slice(0, 5).map((event) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
{error && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Typography variant="h5">Error: {error.message}</Typography>
  </Box>
)}

{instructorsError && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Typography variant="h5">
      Error: {instructorsError.message}
    </Typography>
  </Box>
)}

{blogsError && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Typography variant="h5" color="error">
      Error: {blogsError.message}
    </Typography>
  </Box>
)}

{eventsError && (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Typography variant="h5" color="error">
      Error: {eventsError.message}
    </Typography>
  </Box>
   )}
   </PrivateRoute>
   </>
   
 );
}