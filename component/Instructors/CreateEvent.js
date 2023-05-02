import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { db, auth } from '../../Firebase/Firebase';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import { IconButton } from '@mui/material';
import {
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Button,
    Box,
    Input,
  } from '@mui/material';


const CreateEvent = ({ closeModal, newEventStart }) => {
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStartState, setNewEventStartState] = useState(newEventStart);
  const [newEventEnd, setNewEventEnd] = useState('');
  const [newEventLink, setNewEventLink] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  let userId = auth?.currentUser?.uid;

  const storage = getStorage();

  const uploadCoverImage = async () => {
    const storageRef = ref(storage, `coverImages/${coverImage.name}`);
    await uploadBytes(storageRef, coverImage);
    return await getDownloadURL(storageRef);
  };

  const createNewEvent = async () => {
    if (!newEventTitle || !newEventStartState || !newEventEnd) {
      alert('Please fill in all the fields.');
      return;
    }

    const coverImageUrl = coverImage ? await uploadCoverImage() : '';

    const newEvent = {
      title: newEventTitle,
      start: newEventStartState,
      end: newEventEnd,
      link: newEventLink,
      description: newEventDescription,
      createdBy: userId,
      coverImage: coverImageUrl,
    };

    try {
      await addDoc(collection(db, 'Events'), newEvent);
      setNewEventTitle('');
      setNewEventStartState('');
      setNewEventEnd('');
      setNewEventLink('');
      setNewEventDescription('');
      setCoverImage(null);
      closeModal();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <Dialog open={true} onClose={closeModal}>
      <DialogTitle>Create an online Session</DialogTitle>
      <DialogContent>
        <uploadCoverImage />
        <Box display="flex" justifyContent="center" mb={2}>
              <label htmlFor="blogCover">
              <input
        id="blogCover"
        type="file"
        accept="image/*"
        onChange={(e) => setCoverImage(e.target.files[0])}
      />

                <Button
                  component="span"
                  variant="outlined"
                  color="primary"
                  startIcon={<AddAPhoto />}
                >
                  Upload Cover Image
                </Button>
              </label>
            </Box>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}>

          </TextField>
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
