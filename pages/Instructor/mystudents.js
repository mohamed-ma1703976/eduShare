import React, { useEffect, useState } from 'react'
import InstSidebar from '../../component/Instructors/InstSidebarr'
import InstNav from '../../component/Instructors/InstNav'
import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
import MyStudents from '../../component/Instructors/MyStudents'
import Loading from '../../component/Loading '
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"
import Head from 'next/head'
function mystudents() {
  const [search, setSearch] = React.useState("")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set timeout to 5 seconds
  }, []);

  if (loading) {
    return <Loading />; // Render Loading component
  }

  return (

    <div >
      <Head>
        <title>My Students</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <PrivateRoute path="/secure">
        <Box>

          <InstNav setCourseSearch={setSearch} />

          <Stack direction="row">

            <InstSidebar />

            <div style={{ display: "flex", alignItems: "center", margin: "px 0 0 0" }}>
              <Box flexGrow={1}>
                <MyStudents />
              </Box>
            </div>
          </Stack>

        </Box>
      </PrivateRoute>

    </div>
  )
}

export default mystudents