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
    Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

const CompationForm = ({ setOpen }) => {
    const router = useRouter();

    const [instructors, setInstructors] = React.useState([]);

    const [formData, setFormData] = useState({
        CompationType: "",
        CompationQuestion: "",
        AchivmentCard: ""

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
            CompationType: formData.CompationType,
            CompationQuestion: formData.CompationQuestion,
            AchivmentCard: formData.AchivmentCard
        };

        try {
            const compationCollection = collection(db, 'Compations');
            await addDoc(compationCollection, collectedData);
            router.reload();
        } catch (err) {
            console.log(err);
        }
    };






    return (

        <form onSubmit={handleSubmit} style={{
            margin: "10px 10px 10px 10px"

        }}>




            <FormControl fullWidth variant="outlined" style={{ width: '100%', margin: "10px 10px 10px 10px" }}>
                <InputLabel htmlFor="student-select">Compation Type</InputLabel>

                <Select labelId="student-select"
                    name="CompationType" label="Compation Type" value={formData.CompationType} onChange={handleChange}>

                    <MenuItem value="Hours Of Teaching">
                        Hours Of Teaching
                    </MenuItem>

                </Select>
            </FormControl>
            <TextField

                id="outlined-error-helper-text"
                label="Compation Question"
                sx={{ margin: "10px 10px 10px 10px", width: "100%" }}
                name="CompationQuestion"
                onChange={handleChange}
                value={formData.CompationQuestion}
            />


            <TextField
                id="outlined-error-helper-text"
                label="How the Message  will look like in Achievement Card"
                sx={{ margin: "10px 10px 10px 10px", width: "100%" }}
                name="AchivmentCard"
                onChange={handleChange}
                value={formData.AchivmentCard}
            />
            {/* <TextField
                id="outlined-multiline-static"
                label="Course Description"
                multiline
                rows={4}
                sx={{ margin: "10px 10px 10px 10px" }}
                name="CourseDescription"
                onChange={handleChange}
                value={formData.CourseDescription}

            /> */}


            <div style={{ display: "flex" }}>
                <Button variant="outlined" sx={{ margin: "10px 0 0 10px" }} type="submit">
                    Save
                </Button>

                <Button variant="outlined" sx={{ margin: "10px 0 0 340px", width: "13%" }} onClick={() => setOpen(false)}>
                    cancel
                </Button>



            </div>
        </form >


    )
}

export default CompationForm