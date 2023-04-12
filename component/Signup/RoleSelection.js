import React, { use, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  Link
} from "@mui/material";
import { Box } from "@mui/system";
import Router, { useRouter } from 'next/router';

export default function RoleSelection() {

  const router = useRouter()

  return (
    <Grid
      container
      justifyContent={{ sm: "center" }}
      alignItems={{ sm: "center" }}
      height={"100vh"}
    >
      <Paper
        sx={{
          width: "30%",
          height: 220,
          margin: "0 0 0 130px",
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



          <Button
            sx={{
              backgroundColor: "#00adb5",
              height: 45,
              fontSize: 22,
              fontWeight: "bold",
              margin: "20px 0 10px 0"
            }}
            variant="contained"
            type="submit"
            onClick={() => router.push("/Student/registration")}
          >
            Sign Up as Student
          </Button>

          <Button
            sx={{
              backgroundColor: "#00adb5",
              height: 45,
              fontSize: 22,
              fontWeight: "bold"
            }}
            variant="contained"
            type="submit"
            onClick={() => router.push("/Instructor/registration")}
          >
            Sign Up as Instructor
          </Button>

        </Stack>
        <div style={{ margin: "10px 0 0 10px" }}>
          <Link href="/" variant="body2" color="inherit"> Back to login page</Link>
        </div>      </Paper>
    </Grid >
  );
}
