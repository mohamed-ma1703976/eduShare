import { useContext, useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Input,
} from '@mui/material';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AuthContext } from '../../hooks/AuthProvider';
import { db } from '../../Firebase/Firebase';
import { useRouter } from 'next/router';
import { auth } from '../../Firebase/Firebase';

function CreateBlog() {

  const [inst, setInst] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null); // Add this line
  const router = useRouter();
  let userId = auth?.currentUser?.uid;


  useEffect(() => {
    const fetchInst = async () => {
      const studentCollection = collection(db, 'Instructor');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setInst(studentList);
    };

    fetchInst();
  }, []);

  let nameOfInst = inst.find(s => s.id === userId)?.attributes.firstName
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body || !image) {
      return;
    }

    setLoading(true);

    const storage = getStorage();
    const storageRef = ref(storage, `blog-images/${image.name}`);
    await uploadBytes(storageRef, image);

    const url = await getDownloadURL(storageRef);
    setImageUrl(url);

    const blogRef = doc(collection(db, 'Blog'));

    await setDoc(blogRef, {
      Title: title,
      Body: body,
      AuthorId: userId,
      img: imageUrl,
      instruuctorName: nameOfInst
    });

    setTitle('');
    setBody('');
    setLoading(false);
    setSuccess(true);

    // Navigate to the Instructor/myBlogs page after blog is created
    router.push('/Instructor/myBlogs');
  };
  useEffect(() => {
    setImagePreview(preview);
  }, [preview]);


  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          width: { xs: '90%', sm: 500 },
          minHeight: { xs: '80%', sm: 750 },
          padding: 10,
          pb: 5,
          boxShadow: {
            xs: "none",
            md: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
          },
        }}
      >
        <Stack direction={"column"} gap={1} >
          <Typography variant="h5" align="center">
            Create Blog
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="center" mb={2}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f0f0f0',
                  cursor: 'pointer',
                  backgroundImage: `url(${imagePreview})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '5px',
                }}
                onClick={() => document.getElementById("blogCover").click()}
              />
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
              <label htmlFor="blogCover">
                <Input
                  id="blogCover"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e)}
                />

                <Button
                  component="span"
                  variant="outlined"
                  color="primary"
                  startIcon={<AddAPhoto />}
                >
                  Upload Cover Image
                </Button>
              </label>
            </Box>
            <TextField
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Box mt={2}>
              <TextField
                id="content"
                label="Content"
                type="text"
                fullWidth
                multiline
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </Box>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Blog
              </Button>
            </Box>
          </form>
        </Stack>
        {loading && (
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              Uploading...
            </Typography>
          </Box>
        )}
        {error && (
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              {error}
            </Typography>
          </Box>
        )}
      </Paper>
    </Grid>
  );
}

export default CreateBlog;  

