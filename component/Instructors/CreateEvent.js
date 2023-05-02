import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db, auth } from '../../Firebase/Firebase';
const CreateEvent = ({ closeModal, newEventStart }) => {
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStartState, setNewEventStartState] = useState(newEventStart);
  const [newEventEnd, setNewEventEnd] = useState('');
  const [newEventLink, setNewEventLink] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  let userId = auth?.currentUser?.uid;
  const createNewEvent = async () => {
    if (!newEventTitle || !newEventStartState || !newEventEnd) {
      alert('Please fill in all the fields.');
      return;
    }

    const newEvent = {
      title: newEventTitle,
      start: newEventStartState,
      end: newEventEnd,
      link: newEventLink,
      description: newEventDescription,
      createdBy: userId,
    };

    try {
      await addDoc(collection(db, 'Events'), newEvent);
      setNewEventTitle('');
      setNewEventStartState('');
      setNewEventEnd('');
      setNewEventLink('');
      setNewEventDescription('');
      closeModal();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Dialog open={true} onClose={closeModal}>
      <DialogTitle>Create an online Session</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Start time"
          type="datetime-local"
          fullWidth
          value={newEventStartState}
          onChange={(e) => setNewEventStartState(e.target.value)}
        />
        <TextField
          margin="dense"
          label="End time"
          type="datetime-local"
          fullWidth
          value={newEventEnd}
          onChange={(e) => setNewEventEnd(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Event Link"
          type="text"
          fullWidth
          value={newEventLink}
          onChange={(e) => setNewEventLink(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Event Description"
          multiline
          rows={4}
          fullWidth
          value={newEventDescription}
          onChange={(e) => setNewEventDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={createNewEvent}>Create Event</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEvent;
