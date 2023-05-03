import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Button } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import Loading from '../../../component/Loading ';
import { CardMedia } from '@mui/material';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Replace this with the actual student ID
  const studentId = 'your_student_id';

  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEventDetails = async () => {
        try {
          const docRef = doc(db, 'Events', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setEventDetails(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error getting document:', error);
        }
      };

      fetchEventDetails();
    }
  }, [id]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png'; // Add the default image URL here

  const registerForEvent = async () => {
    try {
      const studentDocRef = doc(db, 'Student', studentId);
      const studentDocSnap = await getDoc(studentDocRef);
      const studentData = studentDocSnap.data();

      const attendeesCollectionRef = collection(db, `Events/${id}/Attendees`);
      await setDoc(doc(attendeesCollectionRef, studentId), studentData);

      alert('You have successfully registered for the event.');
    } catch (error) {
      console.error('Error registering for the event:', error);
      alert('An error occurred while registering for the event.');
    }
  };

  return (
    <div>
      <Box>
        <StuNav />
        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>
          <Grid item xs={10}>
            <Box>
              <CardMedia
                component="img"
                height="200"
                image={eventDetails.coverImage || defaultImage}
                alt="Event cover"
              />
              <Typography variant="h4" gutterBottom>
                {eventDetails.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Start Time: {eventDetails.start}
              </Typography>
              <Typography variant="body1" gutterBottom>
                End Time: {eventDetails.end}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Event Link: {eventDetails.link}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Description: {eventDetails.description}
              </Typography>
              <Button variant="contained" color="primary" onClick={registerForEvent}>
                Register for Event
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
    );
};
export default EventDetails;