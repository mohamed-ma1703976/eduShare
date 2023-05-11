import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import StudentsTable from '../../component/Signup/StudentsTable'
import { Box, Stack } from "@mui/material"

import React from 'react'
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

function instructors() {
    // const [search, setSearch] = React.useState("")

    return (
        <PrivateRoute path="/secure">
            <Box>

                <Navbar />


                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <Sidebar />

                    <Box flexGrow={1}>
                        <StudentsTable />
                    </Box>



                </Stack>


            </Box>
        </PrivateRoute>


    )
}

export default instructors