import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { db } from '../../../Firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import Loading from '../../../component/Loading ';

function BlogPage ({ blog }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
              <Typography variant="h4" gutterBottom>
                {blog.Title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                By: {blog.InstructorName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {blog.Body}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export async function getServerSideProps({ params }) {
    const blogId = params.id;
    const blogRef = doc(db, 'Blog', blogId);
    const blogSnapshot = await getDoc(blogRef);
  
    if (!blogSnapshot.exists()) {
      return {
        notFound: true,
      };
    }
  
    const blogData = blogSnapshot.data();
  
    // Fetch the instructor name
    const instructorDoc = await getDoc(blogData.Instructor);
    const instructorName = instructorDoc.data().displayName;
  
    const blog = {
      id: blogSnapshot.id,
      Title: blogData.Title,
      Body: blogData.Body,
      img: blogData.img,
      InstructorName: instructorName,
    };
  
    return {
      props: {
        blog,
      },
    };
  }
  
  

export default BlogPage;
