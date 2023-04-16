import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Add this import

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

      if (studentDoc.exists()) {
        router.push("/Student");
      } else {
        router.push("/Instructor");
      }

      setLoginError(false);
    } catch (error) {
      setLoginError(true);
    }
  }
  return (
    <Grid
      container
      justifyContent={{ sm: "center" }}
      alignItems={{ sm: "center" }}
      height={"100vh"}
    >
      <Paper
        sx={{
          width: 500,
          height: 300,
          backgroundColor: "white",
          padding: 5,
          pb: 10,
          boxShadow: {
            xs: "none",
            md:
              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
          }
        }}
      >
        <Stack direction={"column"} gap={2}>
          <Typography variant='h3' sx={{ color: "#454545", fontWeight: "800", margin: "0 0 0 -23px", textAlign: "center" }}>Edu<span style={{ color: "#1ABC9C" }}>Share</span></Typography>
          <form style={{
            display: "flex", flexDirection: "column", margin: "10px 10px 10px 10px"
          }} onSubmit={handelLogin}>

            {loginError && <Alert severity="error" sx={{ width: "85%", margin: "0 0 0 16px" }}>Email or Password is Wrong !</Alert>}
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              name="email"
              onChange={handelChange}
              sx={{ margin: "10px 10px 10px 10px" }}


            />
            <TextField
              id="outlined-basic"
              label="Enter Password"
              variant="outlined"
              name="password"
              onChange={handelChange}
              sx={{ margin: "10px 10px 10px 10px" }}

            />
            <Button
              sx={{
                backgroundColor: "#00adb5",
                height: 45,
                fontSize: 22,
                fontWeight: "bold"
              }}
              variant="contained"
              type="submit"
              onClick={handelLogin}
            >
              Login
            </Button>
          </form>
        </Stack>
        <Link href="/signup/register" variant="body2" color="inherit"> Don't have an account? Register</Link>
      </Paper>
    </Grid >
  );
}
