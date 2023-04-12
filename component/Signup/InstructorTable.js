
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Router, useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import useFetch from "../../hooks/useFetch"

function InstructorTable() {
    const { data, loading, error } = useFetch('http://localhost:1337/api/instructor-signups')



    const router = useRouter()

    const [statusChange, setStatusChange] = useState()
    async function handelDelete(id) {

        const res = await fetch(`http://localhost:1337/api/instructor-signups/${id}`);
        const { data: { attributes: { email } } } = await res.json();
        console.log(email)


        const response = await fetch('http://localhost:1337/api/logins');

        const loginData = await response.json();
        const emails = loginData.data.find(i => {
            if (i.attributes.email === email)
                return i.id

        })




        try {
            const confirmDelete = confirm("Are you sure you want to delete this record?");
            if (!confirmDelete) {
                return;
            }


            const [res1] = await Promise.all([

                fetch(`http://localhost:1337/api/instructor-signups/${id}`, { method: "DELETE" }),
            ]);

            const res2 = await fetch(`http://localhost:1337/api/logins/${emails.id}`, {
                method: "DELETE",
            });

            console.log(res1, res2);


        } catch (err) {
            console.log(err)
        }

        router.reload()




    }






    async function handelClick(id) {
        const collectedData = {
            Status: "Active"
        }
        try {
            const res = await fetch(`http://localhost:1337/api/instructor-signups/${id}`,
                {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ data: collectedData }),
                    method: "PUT",

                }
            )

            // setStatusChange(data.data[id - 1].attributes.Status)
            router.reload()

        } catch (err) {
            console.log(err)
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

                    {data.data?.map(s => {

                        return <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            key={s.id}
                        >
                            <TableCell component="th" scope="row">
                                {s.attributes.firstname
                                }
                            </TableCell>
                            <TableCell align="right"> {s.attributes.lastname}</TableCell>
                            <TableCell align="right">{s.attributes.Specialization}</TableCell>
                            <TableCell align="right"> {s.attributes.phonenumber}</TableCell>
                            <TableCell align="right">{s.attributes.PersonalInfo}</TableCell>
                            <TableCell align="right"><Button onClick={() => handelClick(s.id)}>{s.attributes.Status}</Button>
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