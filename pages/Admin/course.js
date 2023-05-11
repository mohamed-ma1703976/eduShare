import Navbar from '../../component/Navbar'
import Sidebar from '../../component/Sidebar'
import { Box, Stack, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"
import CardList from '../../component/CardList'
import React from 'react'
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

function course() {
    const [search, setSearch] = React.useState("")

    return (
        <PrivateRoute path="/secure">
        <Box>

            <Navbar setCourseSearch={setSearch}/>


            <Stack direction="row" spacing={2} justifyContent="space-between">

                <Sidebar />

                <Box flexGrow={1}>
                <CardList courseSearch={search}/>
                </Box>



            </Stack>


        </Box>
        </PrivateRoute>


    )
}

export default course