import { Box, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import DropCourse from "../../component/Student/DropCourse";
import { auth } from "../../Firebase/Firebase";
import Loading from "../../component/Loading ";
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"
import Head from 'next/head'

export default function mycourses() {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box>
      <Head>
        <title>My Courses</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <PrivateRoute path="/secure">
        {loading && <Loading />}
        {!loading && (
          <>
            <StuNav />
            <Stack direction="row" spacing={2}>
              <StuSideBar />
              <DropCourse userId={userId} />
            </Stack>
          </>
        )}
      </PrivateRoute>

    </Box>
  );
}
