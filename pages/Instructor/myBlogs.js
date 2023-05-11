import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from '../../hooks/AuthProvider';
import { db, app, } from '../../Firebase/Firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import InstNav from '../../component/Instructors/InstNav';
import PrivateRoute from "../../component/PrivateRoutes/PrivateRoute"

function MyBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const userId = auth?.currentUser?.uid;
  console.log(blogs)

  useEffect(() => {
    if (!userId) return;

    const db = getFirestore(app);
    const blogsRef = collection(db, 'Blog');
    const q = query(blogsRef, where('AuthorId', '==', userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const blogsData = [];
      querySnapshot.forEach((doc) => {
        blogsData.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsData);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png'; // Add the default image URL here

  const handleCreateBlog = () => {
    router.push('/Instructor/createBlog');
  };

  const handleUpdateBlog = (id) => {
    router.push(`/Instructor/UpdateBlog?blogId=${id}`);
  };

  const handleDeleteBlog = async (id) => {
    if (confirm("Are you sure you want to continue?")) {
      try {
        const blogRef = doc(db, 'Blog', id);
        await deleteDoc(blogRef);
        console.log('Blog deleted:', id);
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    } else {
      return
    }

  };

  return (
    <div>
      <PrivateRoute path="/secure">

        <Box>
          <InstNav />

          <Stack direction="row">
            <InstSidebar />

            <Box flexGrow={1}>
              <Box display="flex" justifyContent="center" mb={3}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#1abc9c', marginRight: '16px' }}
                  onClick={handleCreateBlog}
                >
                  Add New Blog
                </Button>
              </Box>
              <Grid container spacing={3}>
                {blogs.map((blog) => (
                  <Grid item xs={12} sm={6} key={blog.id}>
                    <Card sx={{ width: '60%', margin: '0 auto' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={blog.img ? blog.img : defaultImage} // Use the provided image, or use the default image if not provided
                        alt={blog.Title}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {blog.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {blog.Body.slice(0, 100)}...
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <IconButton
                          aria-label="update"
                          onClick={() => handleUpdateBlog(blog.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteBlog(blog.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>

        </Box>
      </PrivateRoute>

    </div>
  );
}
export default MyBlogs;
