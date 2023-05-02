import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import CreateEvent from './createEvent';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEventStart, setNewEventStart] = useState('');
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

  return (
    <div>
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
    </div>
  );
};

export default MyCalendar;
