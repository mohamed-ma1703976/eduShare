import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { db, collection } from '../../Firebase/Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '../../component/Loading ';
import StuNav from '../../component/Student/StuNav';
import StuSideBar from '../../component/Student/StuSideBar';
import EventCard from '../../component/Student/EventCard'; // You will create this component later
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";
import Head from 'next/head'

export default function Events() {
  const [eventsSnapshot, loading, error] = useCollection(collection(db, 'Events'));
  const events = eventsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Typography variant="h5">Error: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <>
     <Head>
        <title>Events</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <PrivateRoute path="/secure">
        <Box>
          <StuNav />
          <Grid container>
            <Grid item xs={2}>
              <StuSideBar />
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  fontSize: '30px',
                  fontWeight: '1000',
                  margin: '30px 0',
                  color: '#454545',
                }}
              >
                Events
              </Typography>
              <Grid container spacing={2}>
                {events.map((event) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={event.id}>
                    <EventCard event={event} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PrivateRoute>

    </>
  );
};