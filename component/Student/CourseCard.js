import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Link from 'next/link';
import ButtonBase from '@mui/material/ButtonBase';

const CourseCard = ({ course }) => {
  const {
    CourseTitle,
    InstructorName,
    CourseDescription,
    img,
  } = course.attributes;

  console.log('Course Data:', course);

  if (!course) {
    return null;
  }

  return (
    <Link href={`Student/course/${course.id}`} passHref>
      <ButtonBase component="div" sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Card sx={{ maxWidth: 275, height: '100%', cursor: 'pointer' }}>
          <CardMedia
            component="img"
            height="100"
            image="https://via.placeholder.com/150"
            alt={CourseTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {CourseTitle}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              By: {InstructorName}
            </Typography>
            <Box mt={1}>
              <Typography variant="body2" color="text.secondary">
                {CourseDescription}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </ButtonBase>
    </Link>
  );
};

export default CourseCard;
