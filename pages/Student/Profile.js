import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, CardMedia, Rating } from '@mui/material';
import StuNav from '../../component/Student/StuNav';
import StuSideBar from '../../component/Student/StuSideBar';

// Dummy data
const student = {
  name: 'Mohamed Abdelmoety',
  avatar: 'https://via.placeholder.com/150',
  coverImage: 'https://via.placeholder.com/1200x300',
  courses: [
    { id: 1, title: 'Course 1', rating: 4.5 },
    { id: 2, title: 'Course 2', rating: 4.0 },
    { id: 3, title: 'Course 3', rating: 5.0 },
  ],
  notes: [
    { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Note 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Note 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' },
  ],
};

const Profile = () => {
  return (
    <div>
      <Box>
        <StuNav />
        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>
          <Grid item xs={10}>
            <Box>
              <CardMedia
                component="img"
                height="200"
                image={student.coverImage}
                alt="Cover Image"
              />
              <Box display="flex" alignItems="center" mt={-8} ml={3}>
                <Avatar src={student.avatar} alt="Student Avatar" sx={{ width: 150, height: 150 }} />
                <Typography variant="h4" ml={3}>
                  {student.name}
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography variant="h5" gutterBottom>
                  Latest Courses
                </Typography>
                {student.courses.map((course) => (
                  <Box key={course.id}>
                    <Typography variant="h6">{course.title}</Typography>
                    <Rating value={course.rating} readOnly />
                  </Box>
                ))}
              </Box>
              <Box mt={3}>
                <Typography variant="h5" gutterBottom>
                  Notes
                </Typography>
                {student.notes.map((note) => (
                  <Card key={note.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                      <Typography variant="h6">{note.title}</Typography>
                      <Typography variant="body1">{note.content}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
