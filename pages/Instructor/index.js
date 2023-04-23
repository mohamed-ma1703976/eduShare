import React, { use, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {
    collection,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
} from 'firebase/firestore';
import { db } from '../../Firebase/Firebase'
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/Firebase"
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import { Box, CircularProgress, Stack } from "@mui/material";
export default function instructorDashboard() {

    const [statusCheck, setstatusCheck] = useState(true)
    const [statusValue, setStatusValue] = useState('')


    const [instructors, setInstructors] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    console.log(instructors)

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Listen for changes in the authentication state
        const auth = getAuth(app);

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, get the user ID
                setUserId(user.uid);
            } else {
                // User is signed out, set user ID to null
                setUserId(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);
    console.log(userId)



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

            instructorsList.forEach(s => {

                if (s.id === userId) {
                    if (s.attributes.status === 'Active') {
                        console.log(s.attributes.status)

                        setstatusCheck(false);
                        setStatusValue(s.attributes.status);
                    } else {
                        setstatusCheck(true);
                    }
                } else {
                    setstatusCheck(true);
                }
            });

        };

        fetchInstructors();
    }, [userId]);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "250px 0 0 570px" }} /></div>;




    console.log(instructors);

    return (
        <div>

            <div>
                {statusCheck ? (
                    <p>Your request is pending</p>
                ) : (
                    <Box>

                        <InstNav />

                        <Stack direction="row" spacing={2} >

                            <InstSidebar />

                            {/* <Card /> */}

                        </Stack>

                    </Box>
                )}
                {/* <UploadFile /> */}

            </div>

        </div>
    );
}
