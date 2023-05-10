import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box, Divider,CardActions, Button, Dialog, DialogContent, TextField, DialogTitle, DialogActions, Slide, Toolbar } from '@mui/material';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import InstNav from '../../component/Instructors/InstNav';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../Firebase/Firebase';
import { useRouter } from 'next/router';
import { deepOrange, deepPurple } from '@mui/material/colors';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Messages({ userId }) {
  const [messages, setMessages] = useState([]);
  const [inst, setInst] = useState([])
  const [message, setMesaage] = useState([])
  const [open, setOpen] = React.useState(false);
  const isMyMessage = (fromId) => fromId === userId;
  const [rmassgae, setRmassage] = React.useState({
    rs: ""
  });
  const [mid, setMid] = React.useState(false);

  const router = useRouter()
  userId = auth?.currentUser?.uid;

  useEffect(() => {
    const fetchUserData = async (id, role) => {
      if (!id || !role) {
        console.error('Invalid user ID or role');
        return {};
      }

      const db = getFirestore(app);
      const userDocRef = doc(db, role, id);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        let data = userDoc.data();
        return { name: data.displayName, role: role };
      }
      return {};
    };
    const messageStyles = (fromId) => ({
      display: 'flex',
      justifyContent: fromId === userId ? 'flex-end' : 'flex-start',
      marginBottom: 1,
    });
  
    const messageColor = (fromId) => ({
      backgroundColor: fromId === userId ? deepPurple[500] : deepOrange[500],
      color: 'white',
      borderRadius: '18px',
      padding: '10px',
    });
    const fetchMessages = async () => {
      if (userId) {
        const messagesCollection = collection(db, 'Message');
        const messagesQuery = query(messagesCollection, where('toId', '==', userId));
        const querySnapshot = await getDocs(messagesQuery);

        const messagesList = [];

        for (const doc of querySnapshot.docs) {
          const messageData = doc.data();
          const userData = await fetchUserData(messageData.fromId, messageData.fromRole);
          console.log(messageData)
          messagesList.push({
            id: doc.id,
            data: {
              ...messageData,
              fromName: userData.name,
              fromRole: userData.role,
              InstructorReplays: messageData.InstructorReplays || [], // Ensure InstructorReplays is an array
            },
          });
        }

        setMessages(messagesList);
      }
    };

    const fetchInst = async () => {
      const studentCollection = collection(db, 'Instructor');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setInst(studentList);
    };


    const fetcMess = async () => {
      const studentCollection = collection(db, 'Message');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setMesaage(studentList);
    };

    fetchInst();
    fetcMess()
    fetchMessages();
  }, [userId]);

  let myMessages = message.filter(m => m.attributes.fromId === userId)
  console.log(message)
  console.log(inst)
  console.log(myMessages)
  console.log(userId)

  const handleClickOpen = (id) => {
    console.log(id)
    setMid(id)
    setOpen(true);
    console.log(mid)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setRmassage({ rs: event.target.value })

  };
  async function handelSendReplay() {
    try {
      // fetch the message document
      const messageRef = doc(db, 'Message', mid);
      const messageDoc = await getDoc(messageRef);

      // get the previous replies
      const previousReplies = messageDoc.data().InstructorReplays || [];
      console.log(previousReplies)
      // merge the previous replies with the new reply
      const newReplies = [...previousReplies, rmassgae.rs];
      console.log(newReplies)

      // update the message document with the new replies
      await updateDoc(messageRef, { InstructorReplays: newReplies });

      // clear the reply input and close the dialog
      // setRmassage({ rs: '' });
      setOpen(false);
      router.reload()
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
    <InstNav />
    <Grid container>
      <Grid item xs={2}>
        <InstSidebar />
      </Grid>
      <Grid item xs={10}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: "30px",
            fontWeight: "1000",
            margin: "30px 0",
            color: "#454545",
          }}
        >
          Messages
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll', padding: 2, height: '70vh' }}>
          {myMessages.length > 0 ? (
            myMessages.map((message) => (
              <Box key={message.id} sx={{ marginBottom: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: message.attributes.fromId === userId ? 'flex-end' : 'flex-start',
                    marginBottom: 1,
                  }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{
                      backgroundColor: message.attributes.fromId === userId ? 'primary.light' : 'grey.500',
                      color: 'white',
                      borderRadius: '18px',
                      padding: '10px',
                    }}
                  >
                    {isMyMessage(message.attributes.fromId) ? message.attributes.fromName : message.attributes.toFirstName}: {message.attributes.message}
                  </Typography>
                </Box>
                {message.attributes.InstructorReplays &&
                  Array.isArray(message.attributes.InstructorReplays) ? (
                    message.attributes.InstructorReplays.map((reply, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: message.attributes.fromId === userId ? 'flex-end' : 'flex-start',
                          marginBottom: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: message.attributes.fromId === userId ? 'primary.light' : 'grey.500',
                            color: 'white',
                            borderRadius: '18px',
                            padding: '10px',
                          }}
                        >
                          {message.attributes.fromName}: {reply}
                        </Typography>
                      </Box>
                    ))
                  ) : null}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleClickOpen(message.id)}
                  sx={{ alignSelf: 'flex-end', marginBottom: 2 }}
                >
                  Reply
                </Button>
                <Divider sx={{ marginBottom: 2 }} />
              </Box>
            ))
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
          <DialogTitle
            sx={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "750",
            }}
          >
            Your Message
          </DialogTitle>
          <DialogContent>
            <TextField
              id="outlined-multiline-static"
              label="Reply Here ..."
              multiline
              rows={4}
              sx={{ margin: "10px 10px 10px 10px", width: "100%" }}
              name="rs"
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
        </Grid>
      </Grid>
  </div>
    );
}

export default Messages;


