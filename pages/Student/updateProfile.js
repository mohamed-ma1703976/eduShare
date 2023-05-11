import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../hooks/AuthProvider';
import {
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  Avatar,
  Box,
} from '@mui/material';
import { app, auth } from '../../Firebase/Firebase';
import getUserRole from '../../hooks/getRole';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

export default function UpdateProfile() {
  const router = useRouter();
  //const { userId } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    displayName: '',
    bio: '',
    title: '',
    profilePicture: null,
    coverPicture: null,
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [coverPicturePreview, setCoverPicturePreview] = useState(null);

  let userId = auth?.currentUser?.uid
  // Fetch user data and set the initial state
  useEffect(() => {
    async function fetchUserData() {
      const userRole = await getUserRole(userId, app);

      if (!userId || !userRole) {
        router.push('/');
        return;
      }

      const db = getFirestore(app);
      const userDocRef = doc(db, userRole, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        let data = userDoc.data();
        setProfileData({
          displayName: data.displayName,
          bio: data.bio,
          title: data.title,
          profilePicture: data.profilePicture,
          coverPicture: data.coverPicture,
        });
        setProfilePicturePreview(data.profilePicture);
        setCoverPicturePreview(data.coverPicture);
        setLoading(false);
      }
    }

    fetchUserData();
  }, [userId, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({
        ...prevData,
        profilePicture: file,
      }));
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  const handleCoverPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData((prevData) => ({
        ...prevData,
        coverPicture: file,
      }));
      setCoverPicturePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (image, path) => {
    if (image instanceof File) {
      const storage = getStorage(app);
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, image);
      return await getDownloadURL(imageRef);
    } else {
      return image;
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    const userRole = await getUserRole(userId, app);

    const profilePictureURL = await uploadImage(
      profileData.profilePicture,
      `${userRole}/${userId}/profilePicture`
    );
    const coverPictureURL = await uploadImage(
      profileData.coverPicture,
      `${userRole}/${userId}/coverPicture`
    );

    const updatedProfileData = {
      ...profileData,
      profilePicture: profilePictureURL,
      coverPicture: coverPictureURL,
    };

    const db = getFirestore(app);
    const userDocRef = doc(db, userRole, userId);
    await updateDoc(userDocRef, updatedProfileData);

    setLoading(false);
    router.push('/Student/Profile');
  };

  return (
    <PrivateRoute path="/secure">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        <Paper
          sx={{
            width: { xs: '90%', sm: 500 },
            minHeight: { xs: '80%', sm: 650 },
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
              Update Profile
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 10px 10px 10px",
              }}
            >
              <Stack spacing={3} padding={3}>

                <Box sx={{ textAlign: 'center' }}>
                  <img
                    src={coverPicturePreview}
                    alt="Cover Picture"
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                    onClick={() => document.getElementById('coverPictureInput').click()}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="coverPictureInput"
                    hidden
                    onChange={handleCoverPictureChange}
                  />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    src={profilePicturePreview}
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
                    onClick={() => document.getElementById('profilePictureInput').click()}

                  />
                  <input
                    type="file"
                    accept="image/*"
                    id="profilePictureInput"
                    hidden
                    onChange={handleProfilePictureChange}
                  />
                </Box>
                <TextField
                  fullWidth
                  name="displayName"
                  label="Display Name"
                  value={profileData.displayName}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  value={profileData.title}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  name="bio"
                  label="Bio"
                  multiline
                  rows={4}
                  value={profileData.bio}
                  onChange={handleChange}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Grid>
    </PrivateRoute>

  );
}