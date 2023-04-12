import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import MycoursesCard from "./MycoursesCard";
export default function DropCourse() {
    const { currentId } = useContext(AuthContext);

    console.log(currentId)

    // this is api include all the courses 
    const { data: courses, loading, error } = useFetch('http://localhost:1337/api/courses');

    //  const { data: loginData } = useFetch(`http://localhost:1337/api/logins/${userId}`);
    //  const { data: studentData } = useFetch(`http://localhost:1337/api/sign-ups`);

    // let currentUserEmail = loginData.data?.attributes.email
    // let realUserId = studentData.data?.find(s => s.attributes.email === currentUserEmail).id
    // console.log(realUserId)

    const { data: currentStudentData } = useFetch(`http://localhost:1337/api/sign-ups/${currentId}`);
    console.log(currentStudentData)

    // console.log(currentStudentData.data?.attributes.courseId)

    let registerdCourses = currentStudentData.data?.attributes.courseId
    let myCourses = courses.data?.filter((course) => registerdCourses?.includes(course.id))
    //   console.log(courses.data?.filter(s=>s.id ===currentStudentData.data?.attributes.courseId)  )
    //   console.log(currentStudentData.data?.attributes.courseId)



    // const [updateCourse, setupdateCourse] = useState({
    //     courseId: []
    // })
    // console.log(updateCourse)






    return (
        <div>
            {myCourses?.map(s => (
                <Box sx={{ display: 'flex', flexDirection: 'row', margin:'10px 700px 0 0',cursor:'pointer',alignItems:'center'}}>

                    <MycoursesCard courseTitle={s.attributes.CourseTitle} InstName={s.attributes.InstructorName} />
                </Box>

            ))}
        </div>
    );
}
