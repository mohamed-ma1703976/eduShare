import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase';

function SendMessage({ open, handleClose, toId, fN, lN }) {
  const [message, setMessage] = useState('');
  const [inst, setInstructor] = useState([]);

  //const senderName = auth.currentUser.displayName;


  async function fetchInstructors() {
    const instructorsCollection = collection(db, 'Instructor');
    const instructorsSnapshot = await getDocs(instructorsCollection);
    const instructorsList = instructorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      attributes: doc.data(),
    }));
    setInstructor(instructorsList);
  }

  useEffect(() => {
    fetchInstructors()
  }, [])
  const senderId = auth?.currentUser?.uid;
  const senderName = inst.find(s => s.id === senderId)?.attributes?.displayName
  console.log(auth?.currentUser)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(senderName)

    const messageData = {
      fromId: senderId,
      fromName: senderName,
      toId: toId,
      message: message,
      timestamp: serverTimestamp(),
      toFirstName: fN,
      toLastName: lN
    };
    // await addDoc(collection(db, 'Message'), messageData);
    const messagwColl = collection(db, 'Message');
    await addDoc(messagwColl, messageData);
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


