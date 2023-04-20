// createProfile.js
import React, { useContext, useState } from "react";
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
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function CreateProfile() {
  const router = useRouter();

  const [profileData, setProfileData] = useState({
    displayName: "",
    bio: "",
    profilePicture: null,
    coverPicture: null,
    role: "",
    collection: "",
  });
  async function handleSave(e) {
    e.preventDefault();
  
    const { userId } = useContext(AuthContext);
    const db = getFirestore(app);
    const userDocRef = doc(db, profileData.role === "student" ? "Student" : "Instructor", userId);
  
    // Uploading profile picture and cover picture
    const storage = getStorage(app);
    const profilePictureRef = ref(storage, `profile_pictures/${userId}`);
    const coverPictureRef = ref(storage, `cover_pictures/${userId}`);
  
    if (profileData.profilePicture) {
      const profilePictureSnapshot = await uploadBytes(
        profilePictureRef,
        profileData.profilePicture
      );
      const profilePictureURL = await getDownloadURL(
        profilePictureSnapshot.ref
      );
      profileData.profilePicture = profilePictureURL;
    }
  
    if (profileData.coverPicture) {
      const coverPictureSnapshot = await uploadBytes(
        coverPictureRef,
        profileData.coverPicture
      );
      const coverPictureURL = await getDownloadURL(coverPictureSnapshot.ref);
      profileData.coverPicture = coverPictureURL;
    }
  
    // Update the user document with the new profile data
    await updateDoc(userDocRef, {
      displayName: profileData.displayName,
      bio: profileData.bio,
      profilePicture: profileData.profilePicture,
      coverPicture: profileData.coverPicture,
    });
  
    // Navigate based on the user's role
    if (profileData.role === "student") {
      router.push("/Student/Profile");
    } else if (profileData.role === "instructor") {
      router.push("/Instructor/Profile");
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper
        sx={{
          width: 500,
          height: 550, // Increased height to accommodate the role field
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
            <TextField
              id="role"
              label="Role"
              variant="outlined"
              name="role"
              value={profileData.role}
              onChange={handleInputChange}
              sx={{ margin: "10px 10px 10px 10px" }}
            />
            <input
              accept="image/"
              style={{ display: "none" }}
              id="profilePicture"
              type="file"
              onChange={(e) => handleFileInputChange(e, "profilePicture")}
            />
            <label htmlFor="profilePicture">
              <Button component="span" sx={{ margin: "10px 10px 10px 10px" }}>
                Upload Profile Picture
              </Button>
            </label>
            <input
              accept="image/"
              style={{ display: "none" }}
              id="coverPicture"
              type="file"
              onChange={(e) => handleFileInputChange(e, "coverPicture")}
            />
            <label htmlFor="coverPicture">
              <Button component="span" sx={{ margin: "10px 10px 10px 10px" }}>
                Upload Cover Picture
              </Button>
            </label>
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
