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
export default function instructorDashboard() {

    const [statusCheck, setstatusCheck] = useState(true)
    const [statusValue, setStatusValue] = useState('')


    const [instructors, setInstructors] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    console.log(instructors)
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

            instructorsList.map(s => {
                if (s.attributes.status === 'Active') {
                    setstatusCheck(false)
                    setStatusValue(s.attributes.status)
                }
            })
        };

        fetchInstructors();
    }, []);

    if (loading) return <div>Loading...</div>;




    console.log(instructors);

    return (
        <div>

            <div>
                {statusCheck ? (
                    <p>Your request is pending</p>
                ) : (
                    <p>Instructor Dashboard</p>
                )}
            </div>

        </div>
    );
}
