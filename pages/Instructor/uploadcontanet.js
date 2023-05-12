import React, { useEffect, useState } from 'react'
import Loading from '../../component/Loading ';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Card,
    Typography,
    Paper,
    Button,
} from '@mui/material';
import Head from 'next/head';
import InstNav from '../../component/Instructors/InstNav';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import UploadFile from '../../component/Instructors/UploadFile';
import { getDownloadURL, listAll, ref, uploadBytes, deleteObject } from "firebase/storage";
import { auth, collection, db, storage } from '../../Firebase/Firebase';
import { getDocs } from 'firebase/firestore';
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

function UploadContent() {
    const [fileList, setFileList] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Set timeout to 5 seconds
    }, []);

    const currentUser = auth?.currentUser?.uid;

    let currentInstructor = instructors?.find(ins => ins.id === currentUser)?.attributes.myCourse?.[0]?.coursname?.[0]?.replace(/\s+/g, '');

    useEffect(() => {
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
    if (loading) {
        return <Loading />; // Render Loading component
    }

    const handleDeleteFile = (file) => {
        let confirmation = confirm("This file will be Deleted")
        if (confirmation) {
            const fileRef = ref(storage, `${currentInstructor}/${file.name}`);
            deleteObject(fileRef)
                .then(() => {
                    setFileList((prev) => prev.filter((f) => f !== file));
                })
                .catch((error) => {
                    console.error("Error deleting file", error);
                });
        } else {
            return
        }

    };

    return (
        <div>
             <Head>
        <title>Upload Content</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
            <PrivateRoute path="/secure">
                <Box>
                    <InstNav />

                    <Stack direction="row" justifyContent="center">
                        <InstSidebar />

                        <Box sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}>
                            {/* <Typography variant="h5" sx={{ flexGrow: 1, padding: 2 }}>
                            Upload Content
                        </Typography> */}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0 0 0' }}>
                                <UploadFile setFileList={setFileList} />
                            </div>

                            <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 2, marginLeft: 1, width: '100%' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>File Name</TableCell>
                                            <TableCell>Download Link</TableCell>
                                            <TableCell>Delete</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {fileList.map((file, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{file.name}</TableCell>
                                                <TableCell>
                                                    <Button variant="outlined" color="primary" href={file.url} target="_blank" rel="noopener noreferrer">
                                                        Download
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outlined" color="error" onClick={() => handleDeleteFile(file)}>
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        </Box>
                    </Stack>
                </Box>
            </PrivateRoute>

        </div>
    );
}

export default UploadContent;
