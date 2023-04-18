import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import MycoursesCard from "./MycoursesCard";
import { collection, getDocs } from "firebase/firestore";
import { app, db } from "../../Firebase/Firebase";
import { getAuth } from "firebase/auth";
export default function DropCourse() {

    const [courses, setCourses] = React.useState([]);
    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [userId, setUserId] = React.useState(null);




    useEffect(() => {
        const auth = getAuth(app);

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });
        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        const fetchStudents = async () => {
            const studentCollection = collection(db, 'Student');
            const studentSnapshot = await getDocs(studentCollection);
            const studentList = studentSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setStudents(studentList);
            setLoading(false);
        };

        fetchStudents();
    }, []);

    React.useEffect(() => {
        const fetchCourses = async () => {
            const coursesCollection = collection(db, 'Course');
            const courseSnapshot = await getDocs(coursesCollection);
            const coursesList = courseSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setCourses(coursesList);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    if (loading) return <div>Loading...</div>;





    const currentStudent = students.find(s => s.id === userId).attributes.registerdcourses
    console.log(currentStudent)


    const registerdCoursesByStudent = courses.filter(s => currentStudent.includes(s.id))
    console.log(registerdCoursesByStudent)





    console.log(courses)
    console.log(userId)
    console.log(students)

    return (
        <div>
            {registerdCoursesByStudent?.map(s => (
                <Box sx={{ display: 'flex', flexDirection: 'row', margin: '10px 700px 0 0', cursor: 'pointer', alignItems: 'center' }}>

                    <MycoursesCard courseTitle={s.attributes.CourseTitle} InstName={s.attributes.InstructorName} id={s.id}/>
                </Box>

            ))}
        </div>
    );
}
