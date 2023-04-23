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
import { CircularProgress } from '@mui/material';

export default function InstructorsAchivementCards() {


    const [achivment, setAchivment] = React.useState([]);
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

        fetchAchivment();

    }, []);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;


    console.log(achivment)

    return (
        <div>

            {achivment.map(a => {
                return <Card key={a.id} sx={{ width: '100%', backgroundColor: '#1ABC9C', color: '#454545' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                            Instructor Name : {a.attributes.name}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                            {a.attributes.achievementcard
                            }
                        </Typography>
                    </CardContent>

                </Card>
            })}



        </div >

    );
}
