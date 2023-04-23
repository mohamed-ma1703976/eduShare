import React, { useState } from 'react';
import {
  Box,
  Stack,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Modal,
} from '@mui/material';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Router, { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

import UpdateDialog from './UpdateDialog';

function CardList({ courseSearch }) {
  const router = useRouter();

  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  console.log(courses)
  React.useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'Course');
      const courseSnapshot = await getDocs(coursesCollection);
      const coursesList = courseSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setCourses(coursesList);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;

  async function handleDelete(id) {
    try {
      const courseRef = doc(db, 'Course', id);
      await deleteDoc(courseRef);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000, margin: '5px 0 0 0 ' }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#1ABC9C' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Course Title</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>
                Instructor Name
              </TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>
                Course Description
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontSize: '20px' }}>
                Update
              </TableCell>
              <TableCell align="right" sx={{ color: 'white', fontSize: '20px' }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses
              .filter((val) => {
                if (router.pathname === '/Admin/course') {
                  if (courseSearch === '') {
                    return val;
                  } else if (
                    val.attributes.CourseTitle.toLowerCase().includes(courseSearch.toLowerCase())
                  ) {
                    return val;
                  }
                } else {
                  return;
                }
              })
              .map((s) => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={s.id}
                  >
                    <TableCell component="th" scope="row">
                      {s.attributes.CourseTitle}
                    </TableCell>
                    <TableCell align="right">{s.attributes.InstructorName}</TableCell>
                    <TableCell align="center" sx={{ width: '50%' }}>
                      {s.attributes.CourseDescription}
                    </TableCell>
                    <TableCell align="right">
                      <Button>
                        <UpdateDialog
                          id={s.id}
                          title={s.attributes.CourseTitle}
                          InstructorName={s.attributes.InstructorName}
                          SessionType={s.attributes.SessionType}
                          CourseDescription={s.attributes.CourseDescription}
                        />
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button onClick={() => handleDelete(s.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default CardList;
