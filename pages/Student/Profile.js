import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { app } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../hooks/AuthProvider";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userId, userRole } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
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
  }, [router, userId, userRole]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={user.coverPicture || "/path/to/default/cover/picture"}
          alt="Cover Image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {user.displayName}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {user.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.bio}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
