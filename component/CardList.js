import React, { useState } from 'react'
import { Box, Stack, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, Modal } from "@mui/material"

import useFetch from '../hooks/useFetch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Router, { useRouter } from 'next/router';

import UpdateDialog from './UpdateDialog';

function CardList({ courseSearch }) {

    const router = useRouter()



    const { data, loading, error } = useFetch('http://localhost:1337/api/courses')

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error </div>
    console.log(data)

    async function handelDelete(id) {
        try {
            const res = await fetch(`http://localhost:1337/api/courses/${id}`,
                {

                    method: "DELETE",

                }
            )

            router.reload()
            console.log(res)

        } catch (err) {
            console.log(err)
        }

    }


    return (

        <div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 1000, margin: "5px 0 0 0 " }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                        <TableRow >
                            <TableCell sx={{ color: "white" }} >Course Title</TableCell>

                            <TableCell align="right" sx={{ color: "white" }}>Instructor Name</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>Sesion Type</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Course Description</TableCell>


                            <TableCell align="right" sx={{ color: "white", fontSize: "20px" }}>Update</TableCell>
                            <TableCell align="right" sx={{ color: "white", fontSize: "20px" }}>Delete</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data.data.filter((val) => {
                            if (router.pathname === "/Admin/course") {
                                console.log("true")
                                if (courseSearch === "") {
                                    return val
                                } else if (val.attributes.CourseTitle.toLowerCase().includes(courseSearch.toLowerCase())) {
                                    return val
                                }
                            }else{
                                return 
                            }

                        }).map(s => {

                            return <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={s.id}
                            >
                                <TableCell component="th" scope="row">
                                    {s.attributes.CourseTitle
                                    }
                                </TableCell>
                                <TableCell align="right"> {s.attributes.InstructorName}</TableCell>
                                <TableCell align="right">{s.attributes.SesionType}</TableCell>
                                <TableCell align="center" sx={{ width: "50%" }}>{s.attributes.CourseDescription}</TableCell>
                                <TableCell align="right"><Button ><UpdateDialog id={s.id} title={s.attributes.CourseTitle}
                                    InstructorName={s.attributes.InstructorName}
                                    SesionType={s.attributes.SesionType}
                                    CourseDescription={s.attributes.CourseDescription}
                                /></Button></TableCell>
                                <TableCell align="right"><Button onClick={() => handelDelete(s.id)} >Delete</Button></TableCell>

                            </TableRow>



                        })}

                    </TableBody>
                </Table>
            </TableContainer>



        </div>
    )
}

export default CardList