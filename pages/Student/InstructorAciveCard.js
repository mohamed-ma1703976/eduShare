import { Box, Card, Stack } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import InstructorsAchivementCards from "../../component/Student/InstructorsAchivementCards";

export default function coursePage() {


    return (
        <Box>

            <StuNav />

            <Stack direction="row" spacing={2} >

                <StuSideBar />
                <InstructorsAchivementCards />
            </Stack>

        </Box>
    );
}



