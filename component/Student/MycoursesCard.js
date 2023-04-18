import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAuth } from 'firebase/auth';
import { app, collection, db } from '../../Firebase/Firebase';
import { doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

export default function MycoursesCard({ courseTitle, InstName, id }) {
    console.log(id)
    const router = useRouter();

    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [userId, setUserId] = React.useState(null);
    const [currentCourses, setCurrentCourses] = React.useState();

    const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses



    React.useEffect(() => {
        const auth = getAuth(app);

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
                setCurrentCourses(currentStudent)

            } else {
                setUserId(null);
            }
        });
        return () => unsubscribe();
    }, [students]);
    console.log(currentCourses)



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
    }, []);

    if (loading) return <div>Loading...</div>;




    async function handelDrop(id) {
        try {
            // Find the index of the course with the given id in the currentCourses array
            const index = currentCourses.findIndex(course => course === id);
            if (index !== -1) {
                // If the course is found, remove it from the currentCourses array
                const updatedCourses = [...currentCourses];
                updatedCourses.splice(index, 1);
                setCurrentCourses(updatedCourses);

                // Update the current student's registered courses in the database
                // const studentDocRef = collection(db, 'Student', userId);
                // await studentDocRef.update({
                //     registerdcourses: updatedCourses
                // });



                try {
                    if (userId) {
                        const studentRef = doc(db, 'Student', userId);
                        await updateDoc(studentRef, {
                            registerdcourses
                                : updatedCourses
                        });
                    }
                } catch (err) {
                    console.log(err);
                }

                console.log('Course dropped successfully');
                router.reload()

            }
        } catch (error) {
            console.error('Failed to drop course:', error);
        }
    }

    return (
        <Card sx={{ width: '100%', backgroundColor: '#1ABC9C', color: '#454545' }}>
            <CardContent>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                    Course Name : {courseTitle}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                    Instructor Name :{InstName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }} onClick={() => handelDrop(id)}>Drop course</Button>
            </CardActions>
        </Card>
    );
}