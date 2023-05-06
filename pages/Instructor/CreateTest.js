import DynamicForm from "../../component/Instructors/DynamicForm";
import React, { useState, useEffect } from "react";
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import Loading from "../../component/Loading ";
import { Box, Typography, Stack } from "@mui/material";
import { db, auth } from "../../Firebase/Firebase";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const CreateTest = () => {
  const [loading, setLoading] = useState(false);
  const [courseName, setCourseName] = useState("");
  const router = useRouter();
  const userId = auth?.currentUser?.uid;

  useEffect(() => {
    const fetchCourseName = async () => {
      if (userId) {
        const instructorRef = doc(db, "Instructor", userId);
        const instructorSnap = await getDoc(instructorRef);

        if (instructorSnap.exists()) {
          const courseData = instructorSnap.data();
          const myCourse = courseData.myCourse;
          const course = myCourse.find(c => c.coursname); // Replace this condition with the logic to get the correct course

          if (course) {
            setCourseName(course.coursname);
          }
        }
      }
    };

    fetchCourseName();
  }, [userId]);

  const handleFormSubmit = async (testData) => {
    setLoading(true);
    try {
      const testCollection = collection(db, "tests");
      const docRef = await addDoc(testCollection, { ...testData, userId, courseName });
      console.log("Test saved with ID: ", docRef.id);
      router.push(`/Instructor/Tests`);
      setLoading(false);
    } catch (error) {
      console.error("Error saving test: ", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Box>
        <InstNav />

        <Stack direction="row" justifyContent="center">
          <InstSidebar />

          <Box sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}>
            <Typography variant="h5" sx={{ flexGrow: 1, padding: 2 }}>
              Create a Test
            </Typography>

            <DynamicForm
              onSubmit={handleFormSubmit}
              initialQuestions={[]}
              userId={auth?.currentUser?.uid}
              courseName={courseName}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
export default CreateTest;
