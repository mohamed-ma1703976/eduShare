import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { app, auth } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../hooks/AuthProvider";
import getUserRole from "../../hooks/getRole"
const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userId, userRole } = useContext(AuthContext);
  let currentUserId = auth.currentUser.uid;

  //console.log(getUserRole(userId, app))
  const [useRole, setUseRole] = useState("")



  console.log(user, userId, userRole, currentUserId)

  useEffect(() => {
    //getUserRole(userId, app).then(res => setUseRole(res))

    const fetchUserData = async () => {
      const role = await getUserRole(userId, app); // Wait for the promise to resolve
      console.log('User role:', role);
      setUseRole(role)

      if (!userId || !role) {
        router.push("/");
        return;
      }
      const db = getFirestore(app);
      const userDocRef = doc(db, role, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
       let data = userDoc.data()
        console.log(data);
        setUser(data);
      }
    };

    fetchUserData();
  }, [router, userId, useRole]);


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
