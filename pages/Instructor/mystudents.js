import React from 'react'
import InstSidebar from '../../component/Instructors/InstSidebarr'
import InstNav from '../../component/Instructors/InstNav'
import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
import MyStudents from '../../component/Instructors/MyStudents'
function mystudents() {
    const [search, setSearch] = React.useState("")

    return (

        <div >
            <Box>

                <InstNav setCourseSearch={setSearch} />

                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <InstSidebar />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 0 0" }}>
                        <MyStudents />
                    </div>
                </Stack>

            </Box>
        </div>
    )
}

export default mystudents