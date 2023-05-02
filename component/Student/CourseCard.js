import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";
import ButtonBase from "@mui/material/ButtonBase";
import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { auth, collection, db } from "../../Firebase/Firebase";
import { getDocs } from "firebase/firestore";

const CourseCard = ({ course }) => {
  const { CourseTitle, InstructorName, CourseDescription, img, fileUrl } =
    course;


  const { data: imageUrl } = useFetch(
    `https://firebasestorage.googleapis.com/v0/b/edushare-e9242.appspot.com/o/images%2F${img}?alt=media`
  );

  const router = useRouter();
  const [stu, setStu] = useState([])
  React.useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'Student');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setStu(studentList);
    };
    fetchStudents();
  }, []);

  let userId = auth?.currentUser?.uid
  const currentStudentRegisterdCourses = stu.find(s => s.id === userId)?.attributes?.registerdcourses
  let test = currentStudentRegisterdCourses?.includes(course.id)

  console.log(userId)
  console.log(currentStudentRegisterdCourses)
  console.log(test)


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
    <Link href={router.pathname === "/Student/courses" ? `course/${course.id}` : `Student/course/${course.id}`} passHref>
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
           // border: test ? "2px solid red" : "none",
            position: "relative", // Add position relative to the card
            "&::after": {
              content: "'registered'", // Set the text to display
              display: test ? "block" : "none", // Only show the text if test is true
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 0, 0, 0.5)", // Set the background color to red
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "50%", // Center the text vertically
              opacity: 0, // Set the initial opacity to 0
              transition: "opacity 0.2s ease", // Add a transition for opacity
            },
            "&:hover::after": {
              opacity: 1, // Show the text when hovering over the card
            },

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
            </Typography>
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
