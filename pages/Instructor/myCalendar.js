import React, { useState, useEffect } from 'react';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import InstNav from '../../component/Instructors/InstNav';
import { Box, Stack } from '@mui/material';
import MyCalendar from '../../component/Instructors/Calendar';
import Loading from '../../component/Loading ';

const CalendarPage = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set timeout to 2 seconds
  }, []);

  if (loading) {
    return <Loading />; // Render Loading component
  }

  return (
    <div>
      <Box>
        <InstNav setCourseSearch={setSearch} />

        <Stack direction="row">
          <InstSidebar />

          <div style={{ display: 'flex', alignItems: 'center', margin: 'px 0 0 0', width: '100%' }}>
            <Box flexGrow={1} height="calc(100vh - 64px)">
              <h1>Instructor Calendar</h1>
              <MyCalendar />
            </Box>
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default CalendarPage;
