import { Box, Card, Stack } from "@mui/material";
import React, { use, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import DropCourse from "../../component/Student/DropCourse";

export default function mycourses() {


    return (
        <Box>

            <StuNav />

            <Stack direction="row" spacing={2} >

                <StuSideBar />
                <DropCourse />
            </Stack>

        </Box>
    );
}
