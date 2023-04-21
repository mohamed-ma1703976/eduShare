import { Box, Card, Stack } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import DropCourse from "../../component/Student/DropCourse";
import { auth } from "../../Firebase/Firebase";
import CoursePage from "../../component/Student/CoursePage";
import { useRouter } from "next/router";
export default function coursePage() {

    const router = useRouter()
    const courseName = router.query.myParam
    console.log(courseName)

    return (
        <Box>

            <StuNav />

            <Stack direction="row" spacing={2} >

                <StuSideBar />
                <CoursePage courseName={courseName}/>
            </Stack>

        </Box>
    );
}
