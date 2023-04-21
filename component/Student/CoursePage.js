import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import { useRouter } from 'next/router';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../Firebase/Firebase';
import { Button } from '@mui/material';


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

            <div>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000', margin: "0 800px 0 0" }}>
                    Course Content
                </Typography>
            </div>
            <div>        
                    <Button onClick={() => router.push('/Student/mycourses')}>back to my courses</Button>
            </div>

            {uniqueArr.map((url, index) => {
                return (
                    <div key={index}>
                        <Card sx={{ width: '40%'}}>
                            <CardContent>


                                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}>{CourseNameTrimed + "/" + (index + 1)}</a>

                            </CardContent>

                        </Card>
                    </div>





                );
            })}

        </div>
    );
};

export default CoursePage;
