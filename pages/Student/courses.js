import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CourseCard from "../../component/Student/CourseCard";
import { db, collection } from "../../Firebase/Firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../../component/Loading ";
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";
import Head from 'next/head'

export default function Courses() {
  const [coursesSnapshot, loading, error] = useCollection(
    collection(db, "Course")
  );

  const courses =
    coursesSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  return (
    <>
     <Head>
        <title>Courses</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <PrivateRoute path="/secure">
        {loading ? (
          <Loading />
        ) : (
          <Box>
            <StuNav />
            <Grid container>
              <Grid item xs={2}>
                <StuSideBar />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    fontSize: "30px",
                    fontWeight: "1000",
                    margin: "30px 0",
                    color: "#454545",
                  }}
                >
                  All Courses
                </Typography>
                <Grid container spacing={2}>
                  {courses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                      <CourseCard course={course} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
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
      </PrivateRoute>

    </>
  );
}
