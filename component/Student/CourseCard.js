import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";
import ButtonBase from "@mui/material/ButtonBase";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  const { CourseTitle, InstructorName, CourseDescription, img, fileUrl } =
    course;

  const { data: imageUrl } = useFetch(
    `https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F${img}?alt=media`
  );

  if (!course) {
    return null;
  }

  // Framer Motion animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <Link href={`Student/course/${course.id}`} passHref>
      <ButtonBase
        component="div"
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          component={motion.div}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={cardVariants}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            cursor: "pointer",
            width: "240px", // Add a fixed width here
            boxShadow: 2,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "#ffffff",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={fileUrl}
            alt={CourseTitle}
          />
          <CardContent sx={{ flex: 1, p: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              {CourseTitle}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              By: {InstructorName}
            </Typography>
            <Box mt={1}>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
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
