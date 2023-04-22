import React from 'react'
import { Box, Stack } from "@mui/material"
import InstSidebar from '../../component/Instructors/InstSidebarr'
import InstNav from '../../component/Instructors/InstNav'
import JoinCompation from '../../component/Instructors/JoinCompation'
function joincompation() {

    return (

        <div >
            <Box>

                <InstNav />

                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <InstSidebar />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 0 0" }}>
                        <JoinCompation />
                    </div>
                </Stack>

            </Box>
        </div>
    )
}

export default joincompation
