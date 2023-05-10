import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box, CardActions, Button, Dialog, TextField, DialogContent, Slide, DialogTitle, DialogActions, Toolbar } from '@mui/material';
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import { useRouter } from 'next/router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Messages({ userId }) {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [mid, setMid] = React.useState(false);
  const [stu, setStudents] = useState([])
  const [open, setOpen] = React.useState(false);
  const [rmassgae, setRmassage] = React.useState('');

  const router = useRouter();
  const handleClickOpen = (message) => {
    setMid(message.id);
    setSelectedMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  userId = auth?.currentUser?.uid;

  React.useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'Student');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (userId) {
      const messagesCollection = collection(db, 'Message');
      const messagesQuery = query(messagesCollection, where('toId', '==', userId));
      const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
        const messagesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setMessages(messagesList);
      });

      return () => unsubscribe();
    }
  }, [userId]);

  const handleChange = (event) => {
    setRmassage(event.target.value);
  };



  async function handelSendReplay() {
    try {
      const messageRef = doc(db, 'Message', mid);

      // get the previous replies
      const previousReplies = selectedMessage?.data?.replays || [];

      // merge the previous replies with the new reply
      const newReplies = [...previousReplies, rmassgae];

      // update the message document with the new replies
      await updateDoc(messageRef, { replays: newReplies });

      // clear the reply input and close the dialog
      setRmassage('');
      setOpen(false);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  }

  let replayName = stu.find(s => s.id === userId)?.attributes?.displayName
  return (
    <div>
      <StuNav />
      <Box sx={{ display: 'flex' }}>
        <StuSideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography
            variant="h5"
            sx={{
              fontSize: "30px",
              fontWeight: "1000",
              mb: 3,
              color: "#454545",
            }}
          >
            Messages
          </Typography>
          <Box
            sx={{
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              minHeight: "70vh",
            }}
          >
            {messages.length > 0 ? (
              messages.map((message, index) => {
                const isEven = index % 2 === 0;
                console.log(message)
                return (
                  <Box key={message.id} sx={{ mb: 2, mx: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isEven ? "row" : "row-reverse",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: 1,
                          p: 1,
                          mb: 1,
                          minWidth: "50%",
                          maxWidth: "80%",
                          backgroundColor: isEven ? "#1ABC9C" : "#eee",
                        }}
                      >
                        <Typography variant="body2">
                          From Instructor: {message.data.fromName}
                        </Typography>
                        <Typography variant="body1">
                          {message.data.message}

                        </Typography>
                        {message.data && message?.data?.InstructorReplays?.map(m => {
                          return <Typography variant="body1">{m} </Typography>

                        })}

                      </Box>

                      <Button
                        onClick={() => handleClickOpen(message)}
                        sx={{
                          alignSelf: "center",
                          ml: isEven ? 1 : "auto",
                          mr: isEven ? "auto" : 1,
                        }}
                      >
                        Reply
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isEven ? "row" : "row-reverse",
                        alignItems: "flex-start",
                        pl: isEven ? 2 : "auto",
                        pr: isEven ? "auto" : 2,
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: 1,
                          p: 1,
                          minWidth: "50%",
                          maxWidth: "80%",
                          backgroundColor: isEven ? "#eee" : "#1ABC9C",
                        }}
                      >
                        <Typography variant="body2">
                          Replies from: {replayName}
                        </Typography>
                        <Typography variant="body1">
                          {message.data.replays &&
                            message.data.replays.map((reply, index) => (
                              <Typography key={index} variant="body1">
                                {reply}
                              </Typography>
                            ))}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Typography variant="body1">No messages found.</Typography>
            )}
          </Box>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle sx={{ fontSize: "30px", textAlign: "center", fontWeight: "750" }}>
              To: {selectedMessage?.data.fromName}
            </DialogTitle>
            <DialogContent>
              <TextField
                id="outlined-multiline-static"
                label="Reply Here ..."
                multiline
                rows={4}
                fullWidth
                name="rs"
                value={rmassgae}
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" onClick={handelSendReplay}>
                Send
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
}

export default Messages;
