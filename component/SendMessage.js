import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase';

function SendMessage({ open, handleClose, studentId }) {
  const [message, setMessage] = useState('');
  const senderId = auth.currentUser.uid;
  const senderName = auth.currentUser.displayName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      fromId: senderId,
      fromName: senderName,
      studentId: studentId,
      message: message,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, 'Message'), messageData);
    setMessage('');
    handleClose();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Send a message</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Message"
            fullWidth
            value={message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default SendMessage;
