import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { collection, query, onSnapshot, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';
import { Box, Card, CardContent, Grid, Typography, Button, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [newEventStart, setNewEventStart] = useState('');
  const [eventToEdit, setEventToEdit] = useState(null);
  const router = useRouter();
  const auth = getAuth();

  const handleEventClick = (info) => {
    router.push(`event/${info.event.id}`);
  };

  useEffect(() => {
    if (auth.currentUser) {
      const eventsCollection = collection(db, 'Events');
      const q = query(eventsCollection, where('createdBy', '==', auth.currentUser.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });
        setEvents(eventsData);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [auth.currentUser]);

  const handleDateClick = (info) => {

    setNewEventStart(info.dateStr);
    setModalIsOpen(true);
  };

  const handleEditClick = (event) => {
    setEventToEdit(event);
    setEditModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    if (confirm("Are you sure you want to continue?")) {
      try {
        await deleteDoc(doc(db, 'Events', id));
      } catch (e) {
        console.error('Error deleting document: ', e);
      }
    } else {
      return
    }

  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEventToEdit(null);
  };

  const handleEditEvent = async (updatedEvent) => {
    try {
      await updateDoc(doc(db, 'Events', updatedEvent.id), updatedEvent);
    } catch (e) {
      console.error('Error updating document: ', e);
    }
    setEditModalOpen(false);
    setEventToEdit(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ flex: 1 }}>
        <Button variant="contained" sx={{ backgroundColor: '#1abc9c', marginRight: '16px' }} onClick={() => setModalIsOpen(true)}>
          Create Event
        </Button>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <CreateEvent closeModal={() => setModalIsOpen(false)} newEventStart={newEventStart} />
        </Modal>
      </Box>
      <Grid container item xs={12} md={4} sx={{ flexDirection: 'column', alignItems: 'center' }}>
        {events.map((event) => (
          <Card key={event.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Start Time: {event.start}
              </Typography>
              <Typography variant="body1" gutterBottom>
                End Time: {event.end}
              </Typography>
              <Typography variant="body1" gutterBottom>
                description: {event.description}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Link: {event.link}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                {/* <IconButton
                  aria-label="edit"
                  sx={{ mr: 1 }}
                  onClick={() => handleEditClick(event)}
                >
                  <EditIcon />
                </IconButton> */}
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteClick(event.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default MyCalendar;
