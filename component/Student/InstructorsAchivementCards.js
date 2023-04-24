import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAuth } from 'firebase/auth';
import { app, collection, db, storage } from '../../Firebase/Firebase';
import { doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { Box, ButtonBase, CardMedia, CircularProgress } from '@mui/material';

export default function InstructorsAchivementCards() {


    const [achivment, setAchivment] = React.useState([]);
    const [instructor, setInstructor] = React.useState([]);

    const [loading, setLoading] = React.useState(true);



    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses
    React.useEffect(() => {

        const fetchAchivment = async () => {
            const studentCollection = collection(db, 'AchievementCard');
            const studentSnapshot = await getDocs(studentCollection);
            const studentList = studentSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setAchivment(studentList);
            setLoading(false);
        };

        const fetchInstructors = async () => {
            const studentCollection = collection(db, 'Instructor');
            const studentSnapshot = await getDocs(studentCollection);
            const studentList = studentSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setInstructor(studentList);

        };
        fetchAchivment()
        fetchInstructors();


    }, []);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;



    return (
        <div>
            {achivment.map(a => {
                // Find matching instructor object based on first name
                const matchingInstructor = instructor.find(i => a.attributes.name.split(' ')[0] === i.attributes.firstName);

                // Get coverPicture URL
                const coverPictureUrl = matchingInstructor ? matchingInstructor.attributes.coverPicture : '';

                return (
                    <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }} key={a.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', Height: '100', cursor: 'pointer', Width: "300" ,margin:"10px 20px 0 0" }}>
                            <CardMedia
                                component="img"
                                height="100"
                                image={coverPictureUrl} // Set the coverPicture URL as the image
                                alt={a.attributes.name}
                                style={{ maxHeight: "200px", width: "1000px"}}


                            />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    Instructor Name : {a.attributes.name}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    {a.attributes.achievementcard}
                                </Typography>

                            </CardContent>
                        </Card>
                    </ButtonBase>
                );
            })}
        </div>

    );
}
