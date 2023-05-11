import { Box, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import InstructorsAchivementCards from "../../component/Student/InstructorsAchivementCards";
import Loading from "../../component/Loading "; // Import Loading component
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";

export default function coursePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Set timeout to 5 seconds
  }, []);

  if (loading) {
    return <Loading />; // Render Loading component
  }

  return (
    <Box>
      <PrivateRoute path="/secure">
        <StuNav />

        <Stack direction="row" spacing={2}>
          <StuSideBar />
          <InstructorsAchivementCards />
        </Stack>
      </PrivateRoute>

    </Box>
  );
}
