import { Box, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import InstructorsAchivementCards from "../../component/Student/InstructorsAchivementCards";
import Loading from "../../component/Loading ";

export default function coursePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StuNav />
          <Stack direction="row" spacing={2}>
            <StuSideBar />
            <InstructorsAchivementCards />
          </Stack>
        </>
      )}
    </Box>
  );
}
