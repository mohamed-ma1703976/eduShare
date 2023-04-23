
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Router, useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import useFetch from "../../hooks/useFetch"
import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
} from 'firebase/firestore';
import { db } from '../../Firebase/Firebase'

function InstructorTable() {

    const router = useRouter()
    const [statusChange, setStatusChange] = useState()

    const [instructors, setInstructors] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    console.log(instructors)
    React.useEffect(() => {
        const fetchInstructors = async () => {
            const instructorCollection = collection(db, 'Instructor');
            const instructorSnapshot = await getDocs(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setInstructors(instructorsList);
            setLoading(false);
        };

        fetchInstructors();
    }, []);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;





    async function handelDelete(id) {

        try {
            const instructoreRef = doc(db, 'Instructor', id);
            await deleteDoc(instructoreRef);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    }






    async function handelClick(id) {
        const collectedData = {
            status: "Active"
        }
        try {
            const instructorRef = doc(db, 'Instructor', id);
            await updateDoc(instructorRef, collectedData);
            router.reload();
        } catch (err) {
            console.log(err);
        }

    }
    return (

        <div><TableContainer component={Paper} >
            <Table sx={{ minWidth: 1000, margin: "5px 0 0 0 " }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                    <TableRow >
                        <TableCell sx={{ color: "white" }} >first name</TableCell>

                        <TableCell align="right" sx={{ color: "white" }}>last name</TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>Specialization</TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>phonenumber</TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>PersonalInfo</TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>Status</TableCell>
                        <TableCell align="center" sx={{ color: "white" }}>Delete user</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>

                    {instructors?.map(s => {

                        return <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            key={s.id}
                        >
                            <TableCell component="th" scope="row">
                                {s.attributes.firstName
                                }
                            </TableCell>
                            <TableCell align="right"> {s.attributes.lastName}</TableCell>
                            <TableCell align="right">{s.attributes.specialization}</TableCell>
                            <TableCell align="right"> {s.attributes.phone}</TableCell>
                            <TableCell align="right">{s.attributes.personalInfo}</TableCell>
                            <TableCell align="right"><Button onClick={() => handelClick(s.id)}>{s.attributes.status}</Button>
                            </TableCell>
                            <TableCell align="right"><Button onClick={() => handelDelete(s.id)} >Delete</Button></TableCell>





                            {/* <TableCell align="right"><Button ><InstructorUpdateDialog id={s.id} firstname={s.attributes.firstname}
                                lastname={s.attributes.lastname}
                                Specialization={s.attributes.Specialization}
                                PersonalInfo={s.attributes.PersonalInfo}
                                Status={s.attributes.Status}
                            /></Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handelDelete(s.id)} >Delete</Button></TableCell> */}

                        </TableRow>



                    })}

                </TableBody>
            </Table>
        </TableContainer>
        </div>

    )
}

export default InstructorTable