import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography, Avatar, Grid, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { app, auth } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../hooks/AuthProvider";
import getUserRole from "../../hooks/getRole";

import InstSidebar from '../../component/Instructors/InstSidebarr'
import InstNav from '../../component/Instructors/InstNav'
const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userId, userRole } = useContext(AuthContext);

  //console.log(getUserRole(userId, app))
  const [useRole, setUseRole] = useState("")



  console.log(user, userId, userRole)

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
    return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 0px 0 550px " }} /></div>;

  }


  return (
    <div>
      <Box>
        <InstNav />
        <Grid container>
          <Grid item xs={2}>
            <InstSidebar />
          </Grid>
          <Grid item xs={10}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Card
                sx={{
                  width: "90%",
                  maxWidth: 700,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={user.coverPicture || "/path/to/default/cover/picture"}
                  alt="Cover Image"
                  sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={user.profilePicture || "/path/to/default/profile/picture"}
                      alt="Profile Picture"
                      sx={{
                        width: 140,
                        height: 140,
                        marginBottom: 2,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        border: "4px solid #ffffff",
                        position: "relative",
                        top: "-70px",
                      }}
                    />
                    <Typography variant="h4" component="div" sx={{ mt: -3 }}>
                      {user.displayName}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ mb: 2 }}>
                      {user.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {user.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;