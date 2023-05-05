import React, { useState, useEffect } from "react";
import { db, doc, getDoc, updateDoc } from "../../../Firebase/Firebase";
import DynamicForm from "../../../component/Instructors/DynamicForm";
import InstNav from "../../../component/Instructors/InstNav";
import InstSidebar from "../../../component/Instructors/InstSidebarr";
import Loading from "../../../component/Loading ";
import { Box, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";

const UpdateTest = () => {
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);
  const router = useRouter();
  const { testId } = router.query;

  useEffect(() => {
    const fetchTestData = async () => {
      setLoading(true);
      try {
        const testDoc = doc(db, "tests", testId);
        const testSnapshot = await getDoc(testDoc);
        if (testSnapshot.exists()) {
          setTestData({ ...testSnapshot.data(), id: testSnapshot.id });
        } else {
          console.error("Test not found");
        }
      } catch (error) {
        console.error("Error fetching test data: ", error);
      }
      setLoading(false);
    };

    if (testId) {
      fetchTestData();
    }
  }, [testId]);

  const handleFormSubmit = async (updatedData) => {
    setLoading(true);
    try {
      const testDoc = doc(db, "tests", testId);
      await updateDoc(testDoc, updatedData);
      console.log("Test updated successfully");
      setLoading(false);
      // Redirect or show a success message
    } catch (error) {
      console.error("Error updating test: ", error);
      setLoading(false);
      // Show an error message
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
              Update Test
            </Typography>

            <DynamicForm
  onSubmit={handleFormSubmit}
  initialTitle={testData ? testData.title : ""}
  initialDescription={testData ? testData.description : ""}
  initialDueDate={testData ? testData.dueDate : ""}
  initialQuestions={testData ? testData.questions : []}
/>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default UpdateTest;
