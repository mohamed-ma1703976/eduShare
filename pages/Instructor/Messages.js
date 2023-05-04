import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getDocs } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import InstNav from '../../component/Instructors/InstNav';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../Firebase/Firebase';

function Messages({ userId }) {
  const [messages, setMessages] = useState([]);
  const [inst, setInst] = useState([])
  const [message, setMesaage] = useState([])

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




  return (
    <div>
      <InstNav />
      <Grid container>
        <Grid item xs={2}>
          <InstSidebar />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" gutterBottom style={{ fontSize: "30px", fontWeight: "1000", margin: "30px 0", color: "#454545" }}>
            Messages
          </Typography>
          {myMessages.length > 0 ? (
            myMessages.map((message) => {

              return (
                <Card key={message.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle1">send to :{message.attributes.toFirstName}, {message.attributes.toLastName}</Typography>
                    </Box>
                    <Typography variant="body1">{message.attributes.message}</Typography>


                    <Typography variant="body1">{"replay from : " + message.attributes.toFirstName}, {message.attributes.toLastName}</Typography>

                    <Typography variant="body1">{message.attributes.replays.map((reply, index) => (
                      <Typography key={index} variant="body1">
                        {reply}
                      </Typography>
                    ))}</Typography>

                  </CardContent>
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

