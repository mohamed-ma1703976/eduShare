import React from 'react'
import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
function AdminDashBoard() {
    return (
        <div >
            <Box>

                <Navbar />

                <Stack direction="row" spacing={2} >

                    <Sidebar />

                    <Card />

                </Stack>

            </Box>

              
        </div>    





    )
}   

export default AdminDashBoard