import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import { useRouter } from 'next/router';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../Firebase/Firebase';
import { Button, Toolbar } from '@mui/material';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const CoursePage = ({ courseName }) => {
    const [fileList, setFileList] = React.useState([]);

    const CourseNameTrimed = courseName?.replace(/\s+/g, '')
    const fileListRef = ref(storage, `${CourseNameTrimed}/`); // Declare and initialize fileListRef
    const router = useRouter();


    console.log(courseName)
    console.log(fileListRef)

    useEffect(() => {
        listAll(fileListRef).then((res) => {
            // setFileList([]); // Clear fileList state
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFileList(pre => [...pre, url]);
                });
            });
        });
    }, []); // Add fileListRef as a dependency

    const uniqueArr = [...new Set(fileList)];

    console.log(fileList)
    return (
        <div>

            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' ,fontSize:"30px" ,color:"#454545" ,backgroundColor:"#1ABC9C",padding:"0px 6px 0 6px",borderRadius:"0.5rem"}}>
                    Course Content
                </Typography> */}
                <Button sx={{
                    margin: "-19px 0px 0 735px ",
                    backgroundColor: "#1ABC9C",
                    color: "white",
                    '&:hover': { backgroundColor: '#1ABC9C' }



                }} onClick={() => router.push('/Student/mycourses')}>back to my courses</Button>
            </Toolbar>

            <TableContainer component={Paper} sx={{margin:"-27px 0 0 0 "}}>
                <Table sx={{ minWidth: 1000, margin: "5px 0 0 0px " }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>    Course Name</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}> File Number</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Content</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {uniqueArr.map((url, index) => {
                            return <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={index}
                            >
                                <TableCell component="th" scope="row">{courseName}</TableCell>
                                <TableCell align="center">{(index + 1)}</TableCell>
                                <TableCell align="center">

                                    <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}>{CourseNameTrimed + "/" + (index + 1)}</a>


                                </TableCell>


                            </TableRow>



                        })}
                    </TableBody>
                </Table>
            </TableContainer >
        </div >
    );
};

export default CoursePage;
