// CreateTest.js
import DynamicForm from "../../component/Instructors/DynamicForm";
import React, { useState } from "react";
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import Loading from "../../component/Loading ";
import { Box, Typography, Stack } from "@mui/material";
import { db, auth, collection } from "../../Firebase/Firebase";
import { addDoc } from "firebase/firestore";


const CreateTest = () => {
    const [loading, setLoading] = useState(false);
  
    const handleFormSubmit = async (questions) => {
      setLoading(true);
      try {
        const userId = auth.currentUser.uid;
  
        const testCollection = collection(db, "tests");
        const docRef = await addDoc(testCollection, { questions, userId });
        console.log("Test saved with ID: ", docRef.id);
        setLoading(false);
        // Redirect or show a success message
      } catch (error) {
        console.error("Error saving test: ", error);
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
                Create a Test
              </Typography>
  
              <DynamicForm onSubmit={handleFormSubmit} />
            </Box>
          </Stack>
        </Box>
      </div>
    );
  };
export default CreateTest;  