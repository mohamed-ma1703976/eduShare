import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid} from '@mui/material';
import Sidebar from '../../component/Sidebar';
import Navbar from '../../component/Navbar';
import { db } from '../../Firebase/Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loading from '../../component/Loading ';
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute";
import Head from 'next/head';
import { getFirestore, doc, collection, deleteDoc } from 'firebase/firestore';


export default function Blogs() {
  const [blogsSnapshot, loading, error] = useCollection(collection(db, 'Blog'));
  const blogs = blogsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() })) || [];

  if (loading) {
    return <Loading />;
  }

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

  const deleteBlog = async (id) => {
    await deleteDoc(doc(db, 'Blog', id));
  };

  return (
    <>
      <Box>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
        <PrivateRoute path="/secure">
          <Navbar />
          <Grid container>
            <Grid item xs={2}>
              <Sidebar />
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
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                    <TableRow>
                      <TableCell>Blog Title</TableCell>
                      <TableCell>Instructor</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {blogs.map((blog) => (
                      <TableRow
                        key={blog.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {blog.Title}
                        </TableCell>
                        <TableCell>{blog.instruuctorName}</TableCell>
                        <TableCell align="right">
                          <Button color="secondary" onClick={() => deleteBlog(blog.id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </PrivateRoute>
      </Box>
    </>
  );
};
