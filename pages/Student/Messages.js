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
  const [messages, setMessages] = useState([]);
  const [mid, setMid] = React.useState(false);
  const [data, setData] = React.useState(false);
  const [stu, setStudents] = useState([])
  // console.log(reps)
  const [open, setOpen] = React.useState(false);
  const [replayM, setReplayM] = React.useState({
    replays: []
  });
  const [rmassgae, setRmassage] = React.useState({
    rs: ""
  });
  //console.log(replayM)
  const router = useRouter();
  const handleClickOpen = (id) => {
    console.log(id)
    setMid(id)
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
    // Set timeout to 5 seconds
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
        // setData(messagesList[0].data.replays)
      });

      return () => unsubscribe();
    }
  }, [userId]);

  const handleChange = (event) => {
    setRmassage(event.target.value)

  };

  async function handelSendReplay() {
    try {
      // fetch the message document
      const messageRef = doc(db, 'Message', mid);
      const messageDoc = await getDoc(messageRef);

      // get the previous replies
      const previousReplies = messageDoc.data().replays || [];
      console.log(previousReplies)
      // merge the previous replies with the new reply
      const newReplies = [...previousReplies, rmassgae];
      console.log(newReplies)

      // update the message document with the new replies
      await updateDoc(messageRef, { replays: newReplies });

      // clear the reply input and close the dialog
      setRmassage({ rs: '' });
      setOpen(false);
      router.reload()
    } catch (err) {
      console.log(err);
    }
  }
  let replayName = stu.find(s => s.id === userId)?.attributes?.displayName

  return (
    <div>
      <StuNav />
      <Grid container>
        <Grid item xs={2}>
          <StuSideBar />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" gutterBottom style={{ fontSize: "30px", fontWeight: "1000", margin: "30px 0", color: "#454545" }}>
            Messages
          </Typography>
          {messages.length > 0 ? (
            messages.map((message) => {
              // const senderName = message.data.fromName;
              // const senderRole = message.data.fromRole;
              // const messageText = message.data.message;

              return (
                <Card key={message.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2">From Instructor :{message.data.fromName}</Typography>
                      <Typography variant="subtitle2"></Typography>
                    </Box>
                    <Typography variant="body1">{message.data.message}</Typography>

                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleClickOpen(message.id)}>

                      replay
                    </Button>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"



                    >
                      <DialogTitle sx={{ fontSize: "30px", textAlign: "center", fontWeight: "750" }}> To :{message.data.fromName}</DialogTitle>

                      <DialogContent>

                        <TextField
                          id="outlined-multiline-static"
                          label="Replay Here ..."
                          multiline
                          rows={4}
                          sx={{ margin: "10px 10px 10px 10px", width: "100%" }}
                          name="rs"
                          onChange={handleChange}
                        //   value={rmassgae.rs}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button color="primary" onClick={handelSendReplay}>
                          send
                        </Button>
                      </DialogActions>

                    </Dialog>
                  </CardActions>

                  {/* <Toolbar sx={{ display: "flex", flexDirection: "column" }}> */}

                    <Typography variant="body2">Replay from: {replayName}</Typography>
                    {/* <Typography variant="body2">{message.data.replays}</Typography> */}

                    <Typography variant="body1">{message.data.replays
                      .map((reply, index) => (
                        <Typography key={index} variant="body1">
                          {reply}
                        </Typography>
                      ))}</Typography>
                  {/* </Toolbar> */}



                  {/* <Toolbar sx={{ display: "flex", flexDirection: "column" }}> */}

                    <Typography variant="body2"> {'From Instructor :' + message.data.fromName}</Typography>
                    {/* <Typography variant="body2">{message.data.InstructorReplays
                    }</Typography>
                  </Toolbar> */}


                  <Typography variant="body1">{message.data.InstructorReplays
                      .map((reply, index) => (
                        <Typography key={index} variant="body1">
                          {reply}
                        </Typography>
                      ))}</Typography>
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


