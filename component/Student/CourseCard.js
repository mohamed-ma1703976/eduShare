import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Link from 'next/link';
import ButtonBase from '@mui/material/ButtonBase';
import useFetch from '../../hooks/useFetch';

const CourseCard = ({ course }) => {
  const { CourseTitle, InstructorName, CourseDescription, img,fileUrl } = course;

  const { data: imageUrl } = useFetch(
    `https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F${img}?alt=media`
  );

  if (!course) {
    return null;
  }
  const url = 'https://cdn.pixabay.com/photo/2014/04/05/11/39/people-316506__480.jpg'
  console.log(imageUrl)
  return (
    <Link href={`Student/course/${course.id}`} passHref>
      <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', Height: '500', cursor: 'pointer',Width:"600"}}>
          <CardMedia
            component="img"
            height="100"
            image={fileUrl}
            alt={CourseTitle}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              {CourseTitle}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              By: {InstructorName}
            </Typography>
            <Box mt={1}>
              {/* <Typography variant="body2" color="text.secondary" component="div">
                {CourseDescription}
              </Typography> */}
            </Box>
          </CardContent>
        </Card>
      </ButtonBase>
    </Link>
  );
};

export default CourseCard;
