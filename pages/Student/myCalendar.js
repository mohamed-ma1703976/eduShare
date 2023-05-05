import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Grid } from '@mui/material';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import StuNav from '../../component/Student/StuNav';
import StuSideBar from '../../component/Student/StuSideBar';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

const MyCalendar = () => {
  const router = useRouter();
  const auth = getAuth();
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      const eventsCollection = collection(db, 'Events');
      const q = query(eventsCollection, where('registeredUsers', 'array-contains', auth.currentUser.uid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });
        setRegisteredEvents(eventsData);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [auth.currentUser]);

  return (
    <>
      <Box>
        <StuNav />

        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>

          <Grid item xs={10}>
            <Box sx={{ mt: 4, mb: 4 }}>
              <h1>Student Calendar</h1>
            </Box>

            <Box sx={{ width: '80%', mb: 4 }}>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,dayGridWeek,dayGridDay',
                }}
                events={registeredEvents}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MyCalendar;
