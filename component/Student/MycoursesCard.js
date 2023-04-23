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
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function MycoursesCard({ courseTitle, InstName, id, userid }) {
    const router = useRouter();


    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    //const [userId, setUserId] = React.useState(null);
    const [currentCourses, setCurrentCourses] = React.useState();



    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses
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
    }, [userid]);

    React.useEffect(() => {
        if (students.length > 0 && userid) {
            const currentStudent = students.find(s => s.id === userid)?.attributes.registerdcourses;
            if (currentStudent) {
                setCurrentCourses(currentStudent);
            }
        }
    }, [students, userid]);
    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;


    console.log(userid)

    async function handelDrop(id) {
        try {
            const index = currentCourses.findIndex(course => course === id);
            if (index !== -1) {
                const updatedCourses = [...currentCourses];
                updatedCourses.splice(index, 1);
                setCurrentCourses(updatedCourses);
                try {
                    if (userid) {
                        const studentRef = doc(db, 'Student', userid);
                        await updateDoc(studentRef, {
                            registerdcourses
                                : updatedCourses
                        });
                    }
                } catch (err) {
                    console.log(err);
                }
                if (!userid) {
                    return <div>Loading...</div>;
                }
                console.log('Course dropped successfully');
                router.reload()

            }
        } catch (error) {
            console.error('Failed to drop course:', error);
        }
    }




    function handelRoute(id, name) {
        router.push({
            pathname: '/Student/coursePage',
            query: { myParam: name }
        })

    }
    return (
        <div>


            {/* <Card sx={{ width: '100%', backgroundColor: '#1ABC9C', color: '#454545' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                                Course Name : {courseTitle}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                                Instructor Name : {InstName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }} onClick={() => handelDrop(id)}>Drop course</Button>
                            <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }} onClick={() => handelRoute(id, courseTitle)}>Course Page</Button>

                        </CardActions>
                    </Card>
             */}






            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000, margin: "5px 0 0 0px " }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>    Course Name</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}> Instructor Name</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Drop course</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Course Page</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            key={id}
                        >
                            <TableCell component="th" scope="row">{courseTitle}</TableCell>
                            <TableCell align="right">{InstName}</TableCell>
                            <TableCell align="center">
                                <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid','&:hover': { backgroundColor: '#1ABC9C' } }} onClick={() => handelDrop(id)}>Drop course</Button>
                            </TableCell>


                            <TableCell align="center">

                                <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid','&:hover': { backgroundColor: '#1ABC9C' } }} onClick={() => handelRoute(id, courseTitle)}>Course Page</Button>

                            </TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div >

    );
}