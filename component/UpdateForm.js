import {
  Button,
  TextField,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { color } from '@mui/system';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const UpdateForm = ({
  ids,
  titles,
  InstructorNames,
  SessionTypes,
  CourseDescriptions,
  setOpen
}) => {
  const router = useRouter();

  const [isSelected, setIsSelected] = useState(false);

  const [formData, setFormData] = useState({
    CourseTitle: titles,
    InstructorName: InstructorNames,
    CourseDescription: CourseDescriptions,
    // SessionType: SessionTypes,
    img: '',
  });

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
      // SessionType: formData.SessionType,
    };

    try {
      const courseRef = doc(db, 'Course', ids);
      await updateDoc(courseRef, collectedData);
      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '10px 10px 10px 10px',
      }}
    >
      <TextField
        id="outlined-error-helper-text"
        label="Course Title"
        sx={{ margin: '10px 10px 10px 10px' }}
        name="CourseTitle"
        onChange={handleChange}
        value={formData.CourseTitle}
      />
      <TextField
        id="outlined-error-helper-text"
        label="Instructor Name "
        sx={{ margin: '10px 10px 10px 10px' }}
        name="InstructorName"
        onChange={handleChange}
        value={formData.InstructorName}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Course Description"
        multiline
        maxRows={4}
        sx={{ margin: '10px 10px 10px 10px' }}
        name="CourseDescription"
        onChange={handleChange}
        value={formData.CourseDescription}
      />

      {/* <FormControl sx={{ margin: '0 0 0 10px' }}>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ margin: '10px 10px 0px 20px' }}
          >
            Session Type
          </FormLabel>
  
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label">
            <FormControlLabel
              value="Private"
              name="SessionType"
              control={<Radio />}
              label="Private"
              sx={{ margin: '0px 10px 0px 10px' }}
              onChange={handleChange}
            />
            <FormControlLabel
              value="Public"
              name="SessionType"
              control={<Radio />}
              label="Public"
              sx={{ margin: '0px 10px 0px 10px' }}
              onChange={handleChange}
              />
              </RadioGroup>
              </FormControl> */}
      <div></div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: '10px 0 0 10px ',
        }}
      >
        {isSelected ? (
          <LibraryAddCheckIcon sx={{ color: '#1ABC9C' }} />
        ) : (
          ''
        )}

        {isSelected ? (
          <span style={{ color: '#B2BABB', fontWeight: '500' }}>
            File Selected
          </span>
        ) : (
          ''
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          sx={{ margin: '10px 0 0 10px' }}
          type="submit"
        >
          Update
        </Button>

        <Button variant="outlined" sx={{ margin: "10px 0 0 340px", width: "13%" }} onClick={() => setOpen(false)}>
          cancel
        </Button>
      </div>
    </form>
  );
};

export default UpdateForm;
