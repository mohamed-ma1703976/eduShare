import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Grid } from '@mui/material';
import StuNav from '../../../component/Student/StuNav';
import StuSideBar from '../../../component/Student/StuSideBar';
import { db } from '../../../Firebase/Firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import Loading from '../../../component/Loading ';
import Head from 'next/head'

function BlogPage({ blog }) {
  const router = useRouter();
  if (router.isFallback || !blog) {
    return <Loading />;
  }

  const imageSrc = blog.img ? blog.img : 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png';


  return (
    <div>
      <Head>
        <title>{blog.Title}</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <Box>
        <StuNav />
        <Grid container>
          <Grid item xs={2}>
            <StuSideBar />
          </Grid>
          <Grid item xs={10}>
            <Box>
              <img
                src={imageSrc}
                alt={blog.Title}
                style={{
                  width: '100%',
                  minHeight: '300px',
                  maxHeight: '600px',
                  objectFit: 'cover',
                }}
              />
              <Typography variant="h4" gutterBottom>
                {blog.Title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                By: {blog.InstructorName + " "+ blog.InstructorLastName}
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
}

export async function getStaticPaths() {
  const blogsSnapshot = await getDocs(collection(db, 'Blog'));
  const paths = blogsSnapshot.docs.map((doc) => ({
    params: { id: doc.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
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
  let instructorName = "Unknown";
  if (blogData.Instructor) {
    const instructorDoc = await getDoc(blogData.Instructor);
    instructorName = instructorDoc.data().displayName;
  }

  const blog = {
    id: blogSnapshot.id,
    Title: blogData.Title,
    Body: blogData.Body,
    img: blogData.img,
    InstructorName: blogData.instruuctorName,
    InstructorLastName: blogData.lastName1 || 'Ali'
  };

  return {
    props: {
      blog,
    },
    revalidate: 1,
  };
}

export default BlogPage;
