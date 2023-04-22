import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    InputLabel,
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import Router, { useRouter } from 'next/router';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';

const JoinCompation = () => {
    const router = useRouter();
    const [compations, setCompations] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [userId, setUserId] = useState(null);
    const [joinedComp, setJoinedCom] = useState({
        joinedCompations: []
    });

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCompation, setSelectedCompation] = useState(null);
    //console.log(joinedComp)
    const instructorCompations = instructors.find(s => s.id === userId)?.attributes.joinedCompations

    useEffect(() => {
        const fetchCompations = async () => {
            const instructorCollection = collection(db, 'Compations');
            const instructorSnapshot = await getDocs(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setCompations(instructorsList);
        };

        fetchCompations();
    }, []);

    useEffect(() => {
        const fetchInstructors = async () => {
            const instructorCollection = collection(db, 'Instructor');
            const instructorSnapshot = await getDocs(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setInstructors(instructorsList);
            setJoinedCom({ joinedCompations: instructorCompations || [] })

        };

        fetchInstructors();
    }, [instructors]);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null);
            }
        });

        return () => unsubscribe();
    }, [joinedComp]);

    const handleJoinCompation = (compation) => {
        setSelectedCompation(compation);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    const instructorFirstName = instructors.find(s => s.id === userId)?.attributes.firstName
    const instructorLastName = instructors.find(s => s.id === userId)?.attributes.lastName




    const handleJoinSubmit = async (id, congMessage) => {
        console.log(id)

        setJoinedCom((prevState) => ({
            ...prevState,
            //joinedCourses: [...prevState.joinedCourses, id],

            joinedCompations: prevState.joinedCompations
                ? [...prevState.joinedCompations, id]
                : [id],
        }));

        let collectedData = {
            joinedCompations: Array.isArray(joinedComp.joinedCompations)
                ? [...joinedComp.joinedCompations, id]
                : [id],
        };


        let collectedData1 = {
            name: instructorFirstName + "  " + instructorLastName,
            achievementcard: congMessage

        };

        try {
            const compationCollection = doc(db, 'Instructor', userId);
            await updateDoc(compationCollection, collectedData);
            //router.reload();
        } catch (err) {
            console.log(err);
        }

        try {
            const compationCollection = collection(db, 'AchievementCard');
            await addDoc(compationCollection, collectedData1);
            //router.reload();
        } catch (err) {
            console.log(err);
        }
        handleCloseDialog();
    };




    return (
        <div>
            {compations.map((c) => {
                return (
                    <Card
                        key={c.id}
                        sx={{ width: '100%', backgroundColor: '#1ABC9C', color: '#454545' }}
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '1000' }}>
                                Compation Type: {c.attributes.CompationType}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                sx={{ backgroundColor: '#1ABC9C', color: 'white', margin: '0 0 10px 0', border: '1px solid' }}
                                onClick={() => handleJoinCompation(c)}
                            >
                                Join This Compation
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Join Competition</DialogTitle>
                <DialogContent>
                    <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                        Compation Type: {selectedCompation?.attributes?.CompationType}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div" sx={{ fontWeight: '700' }}>
                        Question: {selectedCompation?.attributes?.CompationQuestion}
                    </Typography>
                    {/* Add additional form fields for joining the competition */}
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleCloseDialog}>No </Button>

                    <Button onClick={() => handleJoinSubmit(selectedCompation?.id, selectedCompation?.attributes.AchivmentCard)} variant="contained" color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default JoinCompation;
