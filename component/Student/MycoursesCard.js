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
import { getDownloadURL, listAll, ref } from 'firebase/storage';

export default function MycoursesCard({ courseTitle, InstName, id, userid }) {
    const router = useRouter();


    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    //const [userId, setUserId] = React.useState(null);
    const [currentCourses, setCurrentCourses] = React.useState();
    const [isCoursePage, setIsCoursePage] = React.useState(false);
    const [fileList, setFileList] = React.useState([]);
    const [trimedCourse, setTrimedCourse] = React.useState([]);



    //const currentStudent = students.find(s => s.id === userId)?.attributes.registerdcourses
    React.useEffect(() => {
        const auth = getAuth(app);

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

        // const unsubscribe = auth.onAuthStateChanged(user => {
        //     if (user) {
        //         setUserId(user.uid);
        //     } else {
        //         setUserId(null);
        //     }
        // });

        fetchStudents();

        // return () => unsubscribe();
    }, [userid]);

    React.useEffect(() => {
        if (students.length > 0 && userid) {
            const currentStudent = students.find(s => s.id === userid)?.attributes.registerdcourses;
            if (currentStudent) {
                setCurrentCourses(currentStudent);
            }
        }
    }, [students, userid]);


    console.log(userid)

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



    async function handelCourseFiles(id, courseName) {
        setIsCoursePage(p => !p)
        console.log(courseName)
        const CourseNameTrimed = courseName.replace(/\s+/g, '')
        setTrimedCourse(CourseNameTrimed)
        console.log(CourseNameTrimed)
        const fileListRef = ref(storage, `${CourseNameTrimed}/`); // Declare and initialize fileListRef

        listAll(fileListRef).then((res) => {
            setFileList([]); // Clear fileList state
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFileList(pre => [...pre, url]);
                });
            });
        });
    }
    console.log(fileList)

    function handelRoute(id,name){
        router.push({
            pathname:'/Student/coursePage',
            query:{myParam:name}
        })

    }
    return (
        <div>
            {
                isCoursePage ? <div><Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                    Course Content
                </Typography>


                    <Button onClick={() => setIsCoursePage(p => !p)}>back to my courses</Button>
                    {fileList.map((url, index) => {
                        return (
                            <div key={index}>
                                <Card sx={{ width: '100%', backgroundColor: '', color: '' }}>
                                    <CardContent>


                                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}>{trimedCourse + "/" + (index + 1)}</a>

                                    </CardContent>

                                </Card>
                            </div>





                        );
                    })}

                </div> :
                    <Card sx={{ width: '100%', backgroundColor: '#1ABC9C', color: '#454545' }}>
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
                            {/* <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }} onClick={() => handelCourseFiles(id, courseTitle)}>Course Page</Button> */}
                            <Button size="small" sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }} onClick={() => handelRoute(id, courseTitle)}>Course Page</Button>

                        </CardActions>
                    </Card>
            }
        </div >

    );
}