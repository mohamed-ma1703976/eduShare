import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
function MyStudents() {
    const [students, setStudentys] = useState([]);
    const [coursess, setCoursess] = useState([]);
    const [instructor, setInstructor] = useState([]);

    let currentId = auth?.currentUser?.uid
    async function fetchCourses() {
        const compationsCollection = collection(db, "Course");
        const compationsSnapshot = await getDocs(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc) => ({
            id: doc.id,
            attributes: doc.data(),
        }));
        setCoursess(compationsList);
    }

    async function fetchStudents() {
        const compationsCollection = collection(db, "Student");
        const compationsSnapshot = await getDocs(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc) => ({
            id: doc.id,
            attributes: doc.data(),
        }));
        setStudentys(compationsList);
    }

    async function fetchInstruuctors() {
        const compationsCollection = collection(db, "Instructor");
        const compationsSnapshot = await getDocs(compationsCollection);
        const compationsList = compationsSnapshot.docs.map((doc) => ({
            id: doc.id,
            attributes: doc.data(),
        }));
        setInstructor(compationsList);
    }



    useEffect(() => {
        fetchStudents()
        fetchCourses()
        fetchInstruuctors()
    }, []);

    let nameOfCourse = instructor.find(s => s.id === currentId)?.attributes.myCourse[0]?.coursname[0]  //console.log(idOfCourse)

    let courseid = coursess.find(c => c.attributes.CourseTitle === nameOfCourse)?.id
    console.log(courseid)

    let registeredStudents = students.filter(s => s.attributes.registerdcourses.includes(courseid));

    console.log(registeredStudents)

    return (

        <div>
            <TableContainer component={Paper} sx={{margin:"-90px 0 0 0 "}}>
                <Table sx={{ minWidth: 1000, margin: '5px 0 0 0 ' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#1ABC9C' }}>
                        <TableRow>
                            
                            <TableCell align="center" sx={{ color: 'white' }}>
                                First Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white' }}>
                                Last Name
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontSize: '20px' }}>
                                Phone Number
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontSize: '20px' }}>
                                email
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registeredStudents.map((s) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    key={s.id}
                                >
                                    <TableCell align="center" component="th" scope="row">
                                        {s.attributes.firstName}
                                    </TableCell>
                                    <TableCell align="center">{s.attributes.lastName}</TableCell>
                                    <TableCell align="center" sx={{ width: '50%' }}>
                                        {s.attributes.phone}
                                    </TableCell>

                                    <TableCell align="center">
                                        {s.attributes.email}
                                    </TableCell>
                                    
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MyStudents