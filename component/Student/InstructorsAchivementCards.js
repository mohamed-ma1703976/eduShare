import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { app, collection, db, storage } from "../../Firebase/Firebase";
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { Box, ButtonBase, CardMedia, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InstructorsAchivementCards() {
  const [achivment, setAchivment] = React.useState([]);
  const [instructor, setInstructor] = React.useState([]);

  React.useEffect(() => {
    const fetchAchivment = async () => {
      const studentCollection = collection(db, "AchievementCard");
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setAchivment(studentList);
    };

    const fetchInstructors = async () => {
      const studentCollection = collection(db, "Instructor");
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setInstructor(studentList);
    };
    fetchAchivment();
    fetchInstructors();
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const mediaVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const titleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const subtitleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {achivment.map((a) => {
          // Find matching instructor object based on first name
          const matchingInstructor = instructor.find(
            (i) => a.attributes.name.split(" ")[0] === i.attributes.firstName
          );

          // Check if the instructor ID exists in the Achievement Collection
          if (matchingInstructor && matchingInstructor.id === a.attributes.id) {
            // Get coverPicture URL
            const coverPictureUrl = matchingInstructor.attributes.coverPicture;

            const cardVariants = {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            };

            const imageVariants = {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
            };

            const contentVariants = {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
            };

            return (
              <Link href={`/Profile/${matchingInstructor.id}`} key={a.id}>
                <ButtonBase
                  component="div"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={cardVariants}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        Height: "100",
                        cursor: "pointer",
                        Width: "300px",
                        margin: "10px 20px 0 0",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <motion.div variants={imageVariants}>
                        <CardMedia
                          component="img"
                          height="100"
                          image={coverPictureUrl}
                          alt={a.attributes.name}
                          style={{ maxHeight: "200px", width: "1000px" }}
                        />
                      </motion.div>
                      <CardContent sx={{ flex: 1 }}>
                        <motion.div variants={contentVariants}>
                          <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                          >
                            Instructor Name: {a.attributes.name}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {a.attributes.achievementcard}
                          </Typography>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ButtonBase>
              </Link>
            );
          } else {
            return null; // If instructor ID doesn't match, return null to skip rendering the Achievement Card
          }
        })}
      </Box>
    </div>
  );
}
