import React, { useState, useContext } from "react";
import { Button, Grid, Paper, Stack, TextField, Typography, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { AuthContext } from "../hooks/AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function App() {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  function handelChange(event) {
    setLoginData((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handelLogin(e) {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      const userId = userCredential.user.uid;
      login(userId);

      const db = getFirestore(app);

      const studentDocRef = doc(db, "Student", userId);
      const studentDoc = await getDoc(studentDocRef);

      const instructorDocRef = doc(db, "Instructor", userId);
      const instructorDoc = await getDoc(instructorDocRef);

      const adminDocRef = doc(db, "Admin", userId);
      const adminDoc = await getDoc(adminDocRef);

      let userDoc;
      let role;

      if (studentDoc.exists()) {
        userDoc = studentDoc;
        role = "student";
        //  router.push('/Student')
      } else if (instructorDoc.exists()) {
        userDoc = instructorDoc;
        role = "instructor";
        // router.push('/Instructor')

      } else if (adminDoc.exists()) {
        userDoc = adminDoc;
        role = "admin";
        //router.push('/Admin')
      } else {
        throw new Error("User not found in any role collection.");
      }

      const userData = userDoc.data();
      let profileComplete;

      if (role === "student") {
        profileComplete = userData.displayName && userData.bio && userData.title;
      } else if (role === "instructor") {
        profileComplete = userData.displayName && userData.bio && userData.title;
      } else {
        profileComplete = true; // Assuming admins don't need a profile completeness check
      }

      if (!profileComplete) {
        router.push("/createProfile");
      } else {
        if (role === "student") {
          router.push("/Student");
        } else if (role === "instructor") {
          router.push("/Instructor");
        } else {
          router.push("/Admin");
        }
      }

      setLoginError(false);
    } catch (error) {
      setLoginError(true);
    }
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Paper
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%", lg: "30%" },
          minHeight: { xs: 300, sm: 350, md: 400, lg: 450 },
          backgroundColor: "white",
          padding: { xs: 2, sm: 3, md: 4, lg: 5 },
          boxShadow: {
            xs: "none",
            md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
          }
        }}
      >
        <Stack direction="column" gap={2}>
          <Typography
            variant="h3"
            sx={{
              color: "#454545",
              fontWeight: "800",
              textAlign: "center",
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem", lg: "3.3rem" },
              mt: 2
            }}
          >
            Edu<span style={{ color: "#1ABC9C" }}>Share</span>
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              margin: { xs: "10px", sm: "15px", md: "20px", lg: "25px" }
            }}
            onSubmit={handelLogin}
          >
            {loginError && <Alert severity="error" sx={{ width: "89%", margin: "0 0 0 10px" }}>Email or Password is Wrong !</Alert>}
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              name="email"
              onChange={handelChange}
              sx={{
                margin: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }
              }}
              onFocus={() => setLoginError(false)}
            />
            <TextField
              id="outlined-basic"
              label="Enter Password"
              variant="outlined"
              name="password"
              onChange={handelChange}
              sx={{
                margin: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }
              }}
              margin="normal"
              placeholder="Password"
              type="password"
              onFocus={() => setLoginError(false)}

            />
            <Button
              sx={{
                backgroundColor: "#00adb5",
                height: { xs: "35px", sm: "40px", md: "45px", lg: "50px" },
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.6rem" },
                fontWeight: "bold",
                margin: { xs: "10px 0 0 10px", sm: "15px 0 0 15px", md: "20px 0 0 20px", lg: "25px 0 0 25px" },
                width: "90%"
              }}
              variant="contained"
              type="submit"
              onClick={handelLogin}
            >
              Login
            </Button>
          </form>
        </Stack>

        <Typography
          variant="body2"
          color="inherit"
          sx={{
            textDecoration: 'underline',
            cursor: "pointer",
            margin: { xs: "10px 0 0 10px", sm: "15px 0 0 15px", md: "20px 0 0 20px", lg: "25px 0 0 25px" },
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem", lg: "1rem" }
          }}
          onClick={() => router.push('/signup/register')}
        >
          Don't have an account? Register
        </Typography>
      </Paper>
    </Grid >
  );
}
