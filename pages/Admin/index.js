import React, { useState, useEffect } from 'react';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import Card from '../../component/Card';
import { Box, Stack } from '@mui/material';
import LineChartComponent from '../../component/Admin/LineChartComponent';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import Loading from "../../component/Loading ";

function AdminDashBoard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration (3000ms) as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Box>
          <Navbar />

          <Stack direction="row" spacing={2}>
            <Sidebar />

            <Card />
          </Stack>
        </Box>
      )}
    </div>
  );
}

export default AdminDashBoard;
