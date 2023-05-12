import React from 'react'
import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"
import Head from 'next/head'
function dashboard() {
  const [search, setSearch] = React.useState("")

  return (

    <div >
      <Head>
        <title>EduShare</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <PrivateRoute path="/secure">
        <Box>

          <Navbar setCourseSearch={setSearch} />

          <Stack direction="row" spacing={2} justifyContent="space-between">

            <Sidebar />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 0 0" }}>
              <Card />
            </div>
          </Stack>

        </Box>
      </PrivateRoute>

    </div>
  )
}

export default dashboard