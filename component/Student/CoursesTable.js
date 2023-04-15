import React, { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthProvider";
import useFetch from "../../hooks/useFetch";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export default function CoursesTable() {
  const { userId } = useContext(AuthContext);
  const { currentIdState } = useContext(AuthContext);
  console.log(userId);

  const [disableButton, setDisableButton] = useState(false);

  const { data: courses, loading, error } = useFetch("Course");
  const { data: user } = useFetch(`User/${userId}`);

  let currentUserEmail = user?.email;

  let realUserId = user?.id;
  let stateData = user?.courseId;

  console.log(stateData);
  console.log(realUserId);
  currentIdState(realUserId);

  const [updateCourse, setupdateCourse] = useState({
    courseId: [],
  });

  useEffect(() => {
    setupdateCourse({ courseId: stateData });
  }, [realUserId]);

  console.log(updateCourse);

  async function handleAddCourse(selectedCourseId) {
    console.log("handleAddCourse called with courseId:", selectedCourseId);

    setupdateCourse((prevState) => ({
      ...prevState,
      courseId: prevState.courseId
        ? [...prevState.courseId, selectedCourseId]
        : [selectedCourseId],
    }));

    console.log(updateCourse);

    let collectedData = {
      courseId: Array.isArray(updateCourse.courseId)
        ? [...updateCourse.courseId, selectedCourseId]
        : [selectedCourseId],
    };

    console.log("collectedData:", collectedData);

    const studentRef = doc(db, "Student", realUserId);
    await updateDoc(studentRef, {
      courseId: collectedData.courseId,
    });

    setDisableButton(true);
  }

  function handleJoinLiveSession(courseId) {
    console.log("Joining live session for courseId:", courseId);
    // Implement the logic to join the live session here
  }

  async function handledeletCourse(courseid) {
    console.log(courseid);

    setupdateCourse((prevState) => ({
      ...prevState,
      courseId: prevState.courseId.filter((id) => id !== courseid),
    }));

    let collectedData = {
      courseId: updateCourse.courseId.filter((id) => id !== courseid),
    };

    if (confirm("Are you sure you want to delete this Course?")) {
      const studentRef = doc(db, "Student", realUserId);
      await updateDoc(studentRef, {
        courseId: collectedData.courseId,
      });
    } else {
      return;
    }
  }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000, margin: "5px 0 0 0 " }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#1ABC9C" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>Course Title</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>Instructor Name</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>Course Description</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Add</TableCell>
                            <TableCell align="center" sx={{ color: "white" }}>Drop</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.data?.map(course => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                key={course.id}
                            >
                                <TableCell component="th" scope="row">{course.attributes.CourseTitle}</TableCell>
                                <TableCell align="right">{course.attributes.InstructorName}</TableCell>
                                <TableCell align="right">{course.attributes.CourseDescription}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        onClick={() => handleAddCourse(course.id)}
                                        disabled={updateCourse.courseId?.includes(course.id)}
                                    >
                                        Add
                                    </Button>
                                    {/* <Button
                        onClick={() => handleJoinLiveSession(course.id)}
                        sx={{ marginLeft: 1, color: "white", backgroundColor: "#1ABC9C" }} // Add some space between the buttons and set the button color to green
                      >
                        Join Live Session
                      </Button> */}
                                </TableCell>


                                <TableCell align="right">

                                    <Button
                                        onClick={() => handledeletCourse(course.id)}
                                    >
                                        Drop
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
