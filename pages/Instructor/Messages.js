import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box, CardActions, Button, Dialog, DialogContent, TextField, DialogTitle, DialogActions, Slide } from '@mui/material';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import InstNav from '../../component/Instructors/InstNav';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../Firebase/Firebase';
import { useRouter } from 'next/router';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Messages({ userId }) {
  const [messages, setMessages] = useState([]);
  const [inst, setInst] = useState([])
  const [message, setMesaage] = useState([])
  const [open, setOpen] = React.useState(false);
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
          {myMessages.length > 0 ? (
            myMessages.map((message) => {
              return (
                <Card
                  key={message.id}
                  sx={{
                    mb: 2,
                    backgroundColor: "#f5f5f5",
                    borderRadius: "15px",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        send to :{message.attributes.toFirstName},{" "}
                        {message.attributes.toLastName}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ marginTop: "10px", marginBottom: "20px" }}
                    >
                      {message.attributes.message}
                    </Typography>
  
                    <Typography variant="body1">
                      {"replay from : " +
                        message.attributes.toFirstName +
                        ", " +
                        message.attributes.toLastName}
                    </Typography>
  
                    <Typography variant="body1">
                      {message.attributes.InstructorReplays &&
                      Array.isArray(message.attributes.InstructorReplays) ? (
                        message.attributes.InstructorReplays.map(
                          (reply, index) => (
                            <Typography key={index} variant="body1">
                              {reply}
                            </Typography>
                          )
                        )
                      ) : (
                        <Typography variant="body1">No replies yet.</Typography>
                      )}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClickOpen(message.id)}
                    >
                      Replay
                    </Button>
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
                          label="Replay Here ..."
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
                  </CardActions>
                </Card>
              );
            })
          ) : (
            <Typography variant="body1">No messages found.</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Messages;

