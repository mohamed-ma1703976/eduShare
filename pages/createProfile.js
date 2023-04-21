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
import { Avatar } from "@mui/material";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
export default function CreateProfile() {
  const router = useRouter();
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [coverPicturePreview, setCoverPicturePreview] = useState(null);
  const [profileData, setProfileData] = useState({
    displayName: "",
    bio: "",
    profilePicture: null,
    coverPicture: null,
    role: "",
    collection: "",
    title: "", // Add this line
  });
  async function handleSave(e) {
    e.preventDefault();
  
    const { userId } = useContext(AuthContext);
    const db = getFirestore(app);
    const userRef = doc(db, "Users", userId);
  
    useEffect(() => {
      async function fetchUserRole() {
        const userDoc = await getDoc(userRef);
  
        if (userDoc.exists()) {
          const user = userDoc.data();
          setProfileData((prevData) => ({ ...prevData, role: user.role, collection: user.role === "student" ? "Student" : "Instructor" }));
        }
      }
  
      fetchUserRole();
    }, []);
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
        title: profileData.title, // Add this line
      })
  
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
  const handleFileInputChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setProfileData({ ...profileData, [type]: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "profilePicture") {
          setProfilePicturePreview(reader.result);
        } else {
          setCoverPicturePreview(reader.result);
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
    background: `url(${
      coverPicturePreview || "/path/to/default/cover/picture"
    }) no-repeat center center`,
    backgroundSize: "cover",
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
