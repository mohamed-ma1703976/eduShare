import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase/Firebase";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Stack, Button } from "@mui/material";
import Loading from "../../component/Loading ";
import InstNav from "../../component/Instructors/InstNav";
import InstSidebar from "../../component/Instructors/InstSidebarr";
import { useRouter } from "next/router";

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTests = async () => {
      if (auth.currentUser) {
        const userId = auth?.currentUser?.uid;
        const testCollection = collection(db, "tests");
        const q = query(testCollection, where("userId", "==", userId));
        const testSnapshot = await getDocs(q);
        const testsList = testSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTests(testsList);
        setLoading(false);
      }
    };

    fetchTests();
  }, []);
  console.log(tests)
  const handleUpdateTest = (testId) => {
    // router.push(`updateTest/${testId}`);

    router.push({
      pathname: `updateTest/${testId}`,
      query: { myParam: testId }
    })
  };

  const handleDeleteTest = async (testId) => {
    if (confirm("Are you sure you want to continue?")) {
      try {
        const testDoc = doc(db, "tests", testId);
        await deleteDoc(testDoc);
        setTests(tests.filter((test) => test.id !== testId));
        console.log("Test deleted successfully");
      } catch (error) {
        console.error("Error deleting test: ", error);
      }
    } else {
      return
    }


  };

  if (loading) {
    return <Loading />;
  }

  const handleCreateTest = () => {
    router.push("CreateTest");
  };

  return (
    <Box>
      <InstNav />
      <Stack direction="row" justifyContent="center">
        <InstSidebar />
        <Box sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ padding: 2 }}>
            Your Tests
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCreateTest} sx={{ marginBottom: 2, backgroundColor: '#1abc9c', marginRight: '16px' }}>
            Create Test
          </Button>
          <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 2, marginLeft: 1, width: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Number of Questions</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tests.map((test) => (
                  <TableRow key={test.id}>
                    <TableCell>{test.title}</TableCell>
                    <TableCell>{test.description}</TableCell>
                    <TableCell>{test.questions.length}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleUpdateTest(test.id)} sx={{ marginRight: 1 }}>
                        Update
                      </Button>
                      <Button variant="contained" color="secondary" onClick={() => handleDeleteTest(test.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tests;