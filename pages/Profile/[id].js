import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  CircularProgress,
  Grid,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { app } from "../../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import getUserRole from "../../hooks/getRole";
import { MessageOutlined, FavoriteOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchUserData = async () => {
      const role = await getUserRole(id, app);
      console.log("User role:", role);
      setUserRole(role);

      const db = getFirestore(app);
      const userDocRef = doc(db, role, id);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        let data = userDoc.data();
        console.log(data);
        setUser(data);
      }
    };

    fetchUserData();
  }, [router, id]);

  if (!user) {
    return (
      <div>
        <CircularProgress
          size={100}
          color="success"
          sx={{ margin: "200px 550px 0 0 " }}
        />
      </div>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const defaultCoverImage =
  "https://via.placeholder.com/1920x400.png?text=Cover+Image";
const defaultProfileImage =
  "https://i.ibb.co/stTJ1P1/computer-icons-teacher-png-favpng-s-JASskmgxhu-ZQK1-Ya-Xj-UMPj-ZG.jpg";

return (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    <CardMedia
      component="img"
      image={user.coverPicture || defaultCoverImage}
      alt="Cover Image"
      sx={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: "40%",
        maxHeight: "300px", // Set the maxHeight here
        objectFit: "cover",
        width: "100%",
      }}
    />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
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
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", px: 2 }}
        >
          {user.bio}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <IconButton sx={{ mr: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageOutlined fontSize="large" />
            </motion.div>
          </IconButton>
          <IconButton>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FavoriteOutlined fontSize="large" color="error" />
            </motion.div>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
  
};

export default Profile;

