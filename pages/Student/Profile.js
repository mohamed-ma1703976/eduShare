import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography, Avatar, Grid, CircularProgress, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { app, auth } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../hooks/AuthProvider";
import getUserRole from "../../hooks/getRole";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import Loading from "../../component/Loading ";
import EditIcon from "@mui/icons-material/Edit";
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { userId, userRole } = useContext(AuthContext);
  const defaultCoverImage =
    "https://via.placeholder.com/1920x400.png?text=Cover+Image";
  const defaultProfileImage =
    "https://i.ibb.co/stTJ1P1/computer-icons-teacher-png-favpng-s-JASskmgxhu-ZQK1-Ya-Xj-UMPj-ZG.jpg";

  const [useRole, setUseRole] = useState("");

  const userid = auth?.currentUser?.uid
  const handleEditClick = () => {
    router.push("/Student/updateProfile");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const role = await getUserRole(userid, app);
      setUseRole(role);

      if (!userid || !role) {
        router.push("/");
        return;
      }
      const db = getFirestore(app);
      const userDocRef = doc(db, role, userid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        let data = userDoc.data();
        setUser(data);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router, userid, useRole]);

  return (
    <div>
      <Box>
        <PrivateRoute path="/secure">
          {loading && <Loading />}
          {!loading && (
            <>
              <StuNav />
              <Grid container>
                <Grid item xs={2}>
                  <StuSideBar />
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
                        image={user.coverPicture || defaultCoverImage}
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
                            src={user.profilePicture || defaultProfileImage}
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
                          <IconButton
                            color="primary"
                            aria-label="edit profile"
                            onClick={handleEditClick}
                            sx={{ position: "relative", top: "-150px" }}
                          >
                            <EditIcon />
                          </IconButton>
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
            </>
          )}
        </PrivateRoute>

      </Box>
    </div>
  );
};
export default Profile;  