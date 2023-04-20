import { Box, Card, Stack } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import DropCourse from "../../component/Student/DropCourse";
import {auth} from "../../Firebase/Firebase";

export default function mycourses() {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });

        return () => unsubscribe();
    }, []);
    return (
        <Box>

            <StuNav />

            <Stack direction="row" spacing={2} >

                <StuSideBar />
                <DropCourse userId={userId}/>
            </Stack>

        </Box>
    );
}
