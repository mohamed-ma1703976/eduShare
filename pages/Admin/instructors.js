import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import InstructorTable from '../../component/Signup/InstructorTable'
import { Box, Stack } from "@mui/material"

import React from 'react'

function instructors() {
   // const [search, setSearch] = React.useState("")

    return (
        <Box>

            <Navbar />


            <Stack direction="row" spacing={2} justifyContent="space-between">

                <Sidebar />

                <Box flexGrow={1}>
                <InstructorTable />
                </Box>


            </Stack>


        </Box>


    )
}

export default instructors