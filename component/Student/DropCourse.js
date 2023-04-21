import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import MycoursesCard from "./MycoursesCard";
import { collection, getDocs } from "firebase/firestore";
import { app, auth, db } from "../../Firebase/Firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from 'next/router';

export default function DropCourse({userId}) {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    useEffect(() => {
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

    const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses;
    console.log(currentStudent);

    const registeredCoursesByStudent = courses.filter(s => currentStudent && currentStudent.includes(s.id));
    console.log(registeredCoursesByStudent);

    console.log(userId);
    console.log(students);

    return (
        <div>  
            { registeredCoursesByStudent?.map(s => (
                <Box sx={{ display: 'flex', flexDirection: 'row', margin: '10px 700px 0 0', cursor: 'pointer', alignItems: 'center' }} key={s.id}>
                    <MycoursesCard courseTitle={s.attributes.CourseTitle} InstName={s.attributes.InstructorName} id={s.id} userid={userId} />
                </Box>
            ))}
        </div>
    );
}
