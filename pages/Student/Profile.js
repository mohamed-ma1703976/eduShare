import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { app } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const userRole = localStorage.getItem("userRole");

      if (!userId || !userRole) {
        router.push("/");
        return;
      }

      const db = getFirestore(app);
      const userDocRef = doc(db, userRole, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUser(userDoc.data());
      }
    };

    fetchUserData();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={user.coverImage}
          alt="Cover Image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;