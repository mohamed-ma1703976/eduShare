import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid } from '@mui/material';
import InstNav from '../../../component/Instructors/InstNav';
import InstSidebar from '../../../component/Instructors/InstSidebarr';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import Loading from '../../../component/Loading ';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

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

  return (
    <div>
      <Box>
        <InstNav />
        <Grid container>
          <Grid item xs={2}>
            <InstSidebar />
          </Grid>
          <Grid item xs={10}>
            <Box>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EventDetails;
