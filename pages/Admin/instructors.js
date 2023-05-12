import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import InstructorTable from '../../component/Signup/InstructorTable'
import { Box, Stack } from "@mui/material"
import Head from 'next/head'
import React from 'react'
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

function instructors() {
    // const [search, setSearch] = React.useState("")

    return (
        <PrivateRoute path="/secure">
            <Box>
            <Head>
        <title>Instructors</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
                <Navbar />


                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <Sidebar />

                    <Box flexGrow={1}>
                        <InstructorTable />
                    </Box>


                </Stack>


            </Box>
        </PrivateRoute>



    )
}

export default instructors