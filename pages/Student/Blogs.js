import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import StuNav from '../../component/Student/StuNav';
import StuSideBar from '../../component/Student/StuSideBar';
import BlogCard from '../../component/Student/BlogCard';
import { db, collection } from '../../Firebase/Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '../../component/Loading ';

export default function Blogs() {
  const [blogsSnapshot, loading, error] = useCollection(collection(db, 'Blog'));
  const blogs = blogsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  if (loading) {
    return <Loading />;
  }
  console.log(blogs)

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <Typography variant="h5">Error: {error.message}</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box>
        <StuNav />
        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                fontSize: '30px',
                fontWeight: '1000',
                margin: '30px 0',
                color: '#454545',
              }}
            >
              Blogs
            </Typography>
            <Grid container spacing={2}>
              {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
                  <BlogCard blog={blog} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
