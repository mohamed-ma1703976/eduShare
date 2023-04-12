import { Box, Card, Stack } from "@mui/material";
import React, { use, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CoursesTable from "../../component/Student/CoursesTable";
import useFetch from "../../hooks/useFetch";


export default function courseregistration() {
   

    return (
        <Box>

                <StuNav />

                <Stack direction="row" spacing={2} >

                    <StuSideBar />
                       <CoursesTable />

                </Stack>

            </Box>
    );
}
