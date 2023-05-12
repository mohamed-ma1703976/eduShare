import React from "react";
import { Button, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from 'next/router';

export default function RoleSelection() {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Paper
        sx={{
          width: isSmallScreen ? '90%' : '30%',
          margin: isSmallScreen ? 'auto' : '0 0 0 130px',
          backgroundColor: "white",
          padding: isSmallScreen ? 2 : 5,
          pb: 10,
          boxShadow: {
            xs: "none",
            md:
              "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
          }
        }}
      >
        <Stack direction={"column"} gap={2}>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} sx={{ color: "#454545", fontWeight: "800", margin: "0 0 0 -23px", textAlign: "center" }}>Edu<span style={{ color: "#1ABC9C" }}>Share</span></Typography>

          <Button
            sx={{
              backgroundColor: "#00adb5",
              height: isSmallScreen ? 35 : 45,
              fontSize: isSmallScreen ? 16 : 22,
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
              height: isSmallScreen ? 35 : 45,
              fontSize: isSmallScreen ? 16 : 22,
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
          <Typography variant="body2" color="inherit" sx={{
             textDecoration: 'underline', cursor:"pointer"
          }} onClick={()=>router.push('/')}> Back to login page</Typography>
        </div>
      </Paper>
    </Grid >
  );
}
