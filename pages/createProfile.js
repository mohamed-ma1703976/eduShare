// createProfile.js
import { AuthContext } from "../hooks/AuthProvider";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { app } from "../Firebase/Firebase";
import getUserRole from '../hooks/getRole';

import { getFirestore, doc, setDoc, getDoc, updateDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Avatar } from "@mui/material";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import React, { useContext, useState, useEffect } from "react";
export default function CreateProfile() {
  const router = useRouter();
  const { userId } = useContext(AuthContext); // Move this line here  
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [coverPicturePreview, setCoverPicturePreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: "",
    bio: "",
    profilePicture: null,
    coverPicture: null,
    role: "",
    collection: "",
    title: "", // Add this line
  });
  const db = getFirestore(app);
  const userRef = doc(db, "Users", userId);

  useEffect(() => {
    if (!userId) return; // Don't proceed if userId is not set yet

    async function fetchUserRole() {
      const userRole = await getUserRole(userId, app);

      if (userRole) {
        setProfileData((prevData) => ({
          ...prevData,
          role: userRole,
          collection: userRole === "Student" ? "Student" : "Instructor",
        }));
      }
    }

    fetchUserRole();
  }, [userId]);
  function validateProfileData(data) {
    if (!data.displayName || !data.bio || !data.title) {
      return "All fields are required.";
    }
    return null;
  }
  async function handleSave(e) {
    e.preventDefault();
    setLoading(true);

    const { displayName, bio, title } = profileData; // Destructure the values from profileData

    try {
      const updatedProfileData = {
        displayName: displayName.trim(),
        bio: bio.trim(),
        title: title.trim(),
      };

      // Validate the profile data
      const validationError = validateProfileData(updatedProfileData);
      if (validationError) {
        setError(validationError);
        setLoading(false);
        return;
      }

      // Save the profile data in the appropriate collection
      const collectionRef = collection(db, profileData.collection); // Use profileData.collection
      const userDocRef = doc(db, profileData.collection, userId);
      await updateDoc(userDocRef, {
        displayName: updatedProfileData.displayName,
        bio: updatedProfileData.bio,
        title: updatedProfileData.title,
      });

      const userRole = await getUserRole(userId, app);

      if (userRole === "Student") {
        router.push("/Student");
      } else if (userRole === "Instructor") {
        router.push("/Instructor");
      } else {
        router.push("/Admin");
      }

      setLoading(false);
    } catch (error) {
      console.log(error); // Add this line to log the error
      setError("An error occurred while saving your profile.");
      setLoading(false);
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });

  };
  const handleFileInputChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setProfileData({ ...profileData, [type]: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "profilePicture") {
          setProfilePicturePreview(reader.result);
        } else {
          setCoverPicturePreview(reader.result); // Update coverPicturePreview state
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Paper
        sx={{
          width: 500,
          height: 650, // Adjust the height to accommodate the title field
          backgroundColor: "white",
          padding: 5,
          pb: 10,
          boxShadow: {
            xs: "none",
            md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Stack direction={"column"} gap={2}>
          <Typography
            variant="h4"
            sx={{
              color: "#454545",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Create Profile
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px 10px 10px 10px",
            }}
            onSubmit={handleSave}
          >
            <Box
              component="div"
              width="100%"
              height="200px"
              style={{
                backgroundImage: `url(${coverPicturePreview || "/path/to/default/cover/picture"
                  })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => document.getElementById("coverPicture").click()}
            >
              {!coverPicturePreview && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                  style={{
                    background: "rgba(128, 128, 128, 0.5)",
                  }}
                >
                  <AddAPhoto />
                </Box>
              )}
            </Box>
            <input
              type="file"
              id="coverPicture"
              name="coverPicture"
              style={{ display: "none" }}
              onChange={(e) => handleFileInputChange(e, "coverPicture")}
            />
            <Box display="flex" justifyContent="center">
              <Avatar
                src={profilePicturePreview}
                sx={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                }}
                onClick={() => document.getElementById("profilePicture").click()}
              >
                {!profilePicturePreview && <AddAPhoto />}
              </Avatar>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                style={{ display: "none" }}
                onChange={(e) => handleFileInputChange(e, "profilePicture")}
              />
            </Box>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              name="title"
              value={profileData.title}
              onChange={handleInputChange}
              sx={{ margin: "10px 10px 10px 10px" }}
            />
            <TextField
              id="displayName"
              label="Display Name"
              variant="outlined"
              name="displayName"
              value={profileData.displayName}
              onChange={handleInputChange}
              sx={{ margin: "10px 10px 10px 10px" }}
            />
            <TextField
              id="bio"
              label="Bio"
              variant="outlined"
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              sx={{ margin: "10px 10px 10px 10px" }}
            />
            <Button
              sx={{
                backgroundColor: "#00adb5",
                height: 45,
                fontSize: 22,
                fontWeight: "bold",
              }}
              variant="contained"
              type="submit"
            >
              Save Profile
            </Button>
          </form>
        </Stack>
      </Paper>

    </Grid>
  );

}
