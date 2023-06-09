import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../../Firebase/Firebase";
import Head from 'next/head'

export default function Registration() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  function handleChange(event) {
    setSignUpData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      };
    });
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const auth = getAuth(app);

    if(signUpData.password.length < 6){
      alert('Password lenght should be more than 6 digits')
  }else if(signUpData.email ==="" || signUpData.firstName === "" || signUpData.lastName ==="" || signUpData.phone ==="" ){
      alert('All Fields are required')
  }

    let collectedData = {
      firstName: signUpData.firstName,
      lastName: signUpData.lastName,
      email: signUpData.email,
      phone: signUpData.phone,
      registerdcourses: []
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
      const user = userCredential.user;
      const db = getFirestore(app);
      const docRef = doc(db, "Student", user.uid);
      await setDoc(docRef, collectedData);
      router.push("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }
  return (
    <Paper
      sx={{
        backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        color: "#f5f5f5",
      }}
    >
      <Head>
        <title>Student Registration</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Paper
          sx={{
            width: isMobile ? "90%" : "40%",
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
                variant="h3"
                sx={{
                  color: "#454545",
                  fontWeight: "800",
                  margin: "0 0 0 -23px",
                  textAlign: "center",
                }}
              >
                Edu<span style={{ color: "#1ABC9C" }}>Share</span>
              </Typography>


              <Typography
                variant="h6"
                sx={{
                  color: "#454545",
                  fontWeight: "800",
                  margin: "0 0 0 -23px",
                  textAlign: "center",
                }}
              >
                ( Student Registration )
              </Typography>
              <form onSubmit={handleSignUp}>
                <Stack direction={"column"} gap={2} sx={{ margin: "10px" }}>
                  <Stack direction={"row"} gap={2}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      onChange={handleChange}
                      sx={{ flexGrow: 1 }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      onChange={handleChange}
                      sx={{ flexGrow: 1 }}
                    />
                  </Stack>

                  <Stack direction={"row"} gap={2}>
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      name="phone"
                      onChange={handleChange}
                      sx={{ flexGrow: 1 }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Enter Email"
                      variant="outlined"
                      name="email"
                      onChange={handleChange}
                      sx={{ flexGrow: 1 }}
                    />
                  </Stack>

                  <Stack direction={"row"} gap={2}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Password"
                      variant="outlined"
                      name="password"
                      onChange={handleChange}
                      sx={{ flexGrow: 1 }}
                      margin="normal"
                      placeholder="Password"
                      type="password"
                      fullWidth
                    />
                  </Stack>

                  <Button
                    sx={{
                      backgroundColor: "#00adb5",
                      height: 45,
                      fontSize: 22,
                      fontWeight: "bold",
                      margin: "10px 0",
                    }}
                    variant="contained"
                    type="submit"
                    onClick={handleSignUp}
                  >
                    Register
                  </Button>
                </Stack>
              </form>
              <div style={{ margin: "-30px 0 0 10px" }}>
                {/* <Link href="/" variant="body2" color="inherit"> Back to login page</Link> */}

                <Typography variant="body2" color="inherit" sx={{
                  textDecoration: 'underline', cursor: "pointer"
                }} onClick={() => router.push('/')}> Back to login page</Typography>
              </div>
            </Stack>
          </Paper>
        </Grid>
      </Paper>


  );
}



