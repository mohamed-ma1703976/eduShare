import {
  Button,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { color } from '@mui/system';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const Form = ({ setOpen }) => {
  const router = useRouter();

  const [uploadImg, setUploadImg] = useState({ files: [] });
  const [isSelected, setIsSelected] = useState(false);

  const [instructors, setInstructors] = React.useState([]);

  const [formData, setFormData] = useState({
    CourseTitle: '',
    InstructorName: '',
    CourseDescription: '',
    SessionType: '',
    img: '',
  });


  React.useEffect(() => {
    const fetchInstructors = async () => {
      const instructorCollection = collection(db, 'Instructor');
      const instructorSnapshot = await getDocs(instructorCollection);
      const instructorsList = instructorSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setInstructors(instructorsList);
    };

    fetchInstructors();
  }, []);

  console.log(instructors)
  console.log(formData)


  const handleChange = async (event) => {
    setFormData((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let collectedData = {
      CourseDescription: formData.CourseDescription,
      CourseTitle: formData.CourseTitle,
      InstructorName: formData.InstructorName,
      //SessionType: formData.SessionType,
    };

    try {
      const coursesCollection = collection(db, 'Course');
      await addDoc(coursesCollection, collectedData);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  function handleImg(e) {
    console.log(e.target.files);
    if (e.target.files.length !== 0) {
      setUploadImg(URL.createObjectURL(e.target.files[0]))
      setIsSelected(true)
      setFormData(pre => {
        return {
          ...pre,
          [e.target.name]: e.target.value
        }

      })
    } else {
      console.log("no file selected")
      setIsSelected(false)

    }

  }


  console.log(uploadImg);
  console.log(formData)

  return (

    <form onSubmit={handleSubmit} style={{
      margin: "10px 10px 10px 10px"

    }}>


      <TextField

        id="outlined-error-helper-text"
        label="Course Title"
        sx={{ margin: "10px 10px 10px 10px" }}
        name="CourseTitle"
        onChange={handleChange}
        value={formData.CourseTitle}
      />

      <FormControl fullWidth variant="outlined" style={{ width: '50%', margin: "10px 10px 10px 10px" }}>
        <InputLabel htmlFor="student-select">Instructor Name</InputLabel>

        <Select labelId="student-select"
          name="InstructorName" label="Instructor Name" value={formData.InstructorName} onChange={handleChange}>
          {instructors.map(instructor => (
            <MenuItem key={instructor.id} value={instructor.attributes.firstName}>
              {instructor.attributes.firstName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>



      <TextField
        id="outlined-multiline-flexible"
        label="Course Description"
        multiline
        maxRows={4}
        sx={{ margin: "10px 10px 10px 10px" }}
        name="CourseDescription"
        onChange={handleChange}
        value={formData.CourseDescription}


      />

      {/* <FormControl sx={{ margin: "0 0 0 10px" }}>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ margin: "10px 10px 0px 20px" }}
                >Sesion Type </FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >

                    <FormControlLabel value="Private" name="SesionType" control={<Radio />} label="Private" sx={{ margin: "0px 10px 0px 10px" }} onChange={handleChange} />
                    <FormControlLabel value="Public" name="SesionType" control={<Radio />} label="Public" sx={{ margin: "0px 10px 0px 10px" }} onChange={handleChange} />

                </RadioGroup>
            </FormControl> */}
      <div>

      </div>

      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", margin: "10px 0 0 10px " }}>
        {isSelected ? <LibraryAddCheckIcon sx={{ color: "#1ABC9C" }} /> : ""}

        {isSelected ? <span style={{ color: "#B2BABB", fontWeight: "500" }}>File Selected</span> : ""}

      </div>

      <div style={{ display: "flex" }}>
        <Button variant="outlined" sx={{ margin: "10px 0 0 10px" }} type="submit">
          Save
        </Button>



        <Button variant="outlined" sx={{ margin: "10px 0 0 340px", width: "13%" }} onClick={() => setOpen(false)}>
          cancel
        </Button>
      </div>


      {/* <div style={{ display: "flex" }}>
        
      </div> */}



    </form >


  )
}

export default Form