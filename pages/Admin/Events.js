import React from 'react';
import { Box, Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '../../component/Loading ';
import Sidebar from '../../component/Sidebar';
import Navbar from '../../component/Navbar';
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";
import Head from 'next/head';
import { doc, deleteDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

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
  
    const deleteEvent = async (id) => {
      if(window.confirm("Are you sure you want to delete this event?")) {
        await deleteDoc(doc(db, 'Events', id));
      }
    };
  
    return (
      <>
       <Head>
          <title>Events</title>
          <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
        </Head>
        <PrivateRoute path="/secure">
          <Box>
            <Navbar />
            <Grid container>
              <Grid item xs={2}>
                <Sidebar />
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
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Start Time</TableCell>
                        <TableCell>End Time</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {events.map((event) => (
                        <TableRow
                          key={event.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell>{event.title}</TableCell>
                          <TableCell>{event.start}</TableCell>
                          <TableCell>{event.end}</TableCell>
                          <TableCell>{event.description}</TableCell>
                          <TableCell>
                            <Button 
                            
                              color="secondary" 
                              onClick={() => deleteEvent(event.id)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </PrivateRoute>
      </>
    );
  };