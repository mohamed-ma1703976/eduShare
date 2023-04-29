import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { AuthContext } from '../../hooks/AuthProvider';
import { db } from '../../Firebase/Firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

function MyBlogs() {
  const router = useRouter();
  const { userId } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const blogsRef = collection(db, 'Blog');
    const q = query(blogsRef, where('author', '==', userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const blogsData = [];
      querySnapshot.forEach((doc) => {
        blogsData.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsData);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const handleCreateBlog = () => {
    router.push('/Instructor/createBlog');
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.Body.slice(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleCreateBlog}>
          Add New Blog
        </Button>
      </Box>
    </Box>
  );
}

export default MyBlogs;
