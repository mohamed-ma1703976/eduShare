import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";

function Messages({ userId }) {
  const [messages, setMessages] = useState([]);

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

  return (
    <div>
      <StuNav />
      <Grid container>
        <Grid item xs={2}>
          <StuSideBar />
        </Grid>
        <Grid item xs={10}>
          {messages.map((message) => {
            const senderName = message.data.fromName;
            const senderRole = message.data.fromRole;
            const messageText = message.data.message;

            return (
              <Card key={message.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1">{senderName}</Typography>
                    <Typography variant="subtitle2">{senderRole}</Typography>
                  </Box>
                  <Typography variant="body1">{messageText}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default Messages;
