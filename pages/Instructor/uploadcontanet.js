import React from 'react'

import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
import InstNav from '../../component/Instructors/InstNav'
import InstSidebar from '../../component/Instructors/InstSidebarr'
import UploadFile from '../../component/Instructors/UploadFile'
function uploadcontent() {

    return (

        <div >
            <Box>

                <InstNav />

                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <InstSidebar />


                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 0 0" }}>

                        <UploadFile />

                    </div>
                </Stack>

            </Box>
        </div>
    )
}

export default uploadcontent
