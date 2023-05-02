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

    fetchMessages();
  }, [userId]);

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
          {messages.length > 0 ? (
            messages.map((message) => {
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
