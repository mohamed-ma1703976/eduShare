import {
    Button,
    TextField,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel

} from '@mui/material';
import { color } from '@mui/system';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router';

const Form = () => {
    const router = useRouter()

    const [uploadImg, setUploadImg] = useState({ files: [] })
    const [isSelected, setIsSelected] = useState(false)


    const [formData, setFormData] = useState({
        CourseTitle: "",
        InstructorName: "",
        CourseDescription: "",
        SesionType: "",
        img: ''


    })



    const handelChange = async (event) => {
        setFormData(pre => {
            return {
                ...pre,
                [event.target.name]: event.target.value
            }

        })
    }

    const handelSub = async (e) => {
        e.preventDefault()

        let collectedData = {
            CourseDescription: formData.CourseDescription,
            CourseTitle: formData.CourseTitle,
            InstructorName: formData.InstructorName,
            SesionType: formData.SesionType

        }
        try {
            const res = await fetch('http://localhost:1337/api/courses',
                {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ data: collectedData }),
                    method: "POST",

                }
            )



            console.log(res)
            router.reload()

        } catch (err) {
            console.log(err)
        }


    }

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

        <form onSubmit={handelSub} style={{
            margin: "10px 10px 10px 10px"

        }}>


            <TextField

                id="outlined-error-helper-text"
                label="Course Title"
                sx={{ margin: "10px 10px 10px 10px" }}
                name="CourseTitle"
                onChange={handelChange}
                value={formData.CourseTitle}
            />
            <TextField
                id="outlined-error-helper-text"
                label="Instructor Name "
                sx={{ margin: "10px 10px 10px 10px" }}
                name="InstructorName"
                onChange={handelChange}
                value={formData.InstructorName}


            />
            <TextField
                id="outlined-multiline-flexible"
                label="Course Description"
                multiline
                maxRows={4}
                sx={{ margin: "10px 10px 10px 10px" }}
                name="CourseDescription"
                onChange={handelChange}
                value={formData.CourseDescription}


            />

            <FormControl sx={{ margin: "0 0 0 10px" }}>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ margin: "10px 10px 0px 20px" }}
                >Sesion Type </FormLabel>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >

                    <FormControlLabel value="Private" name="SesionType" control={<Radio />} label="Private" sx={{ margin: "0px 10px 0px 10px" }} onChange={handelChange} />
                    <FormControlLabel value="Public" name="SesionType" control={<Radio />} label="Public" sx={{ margin: "0px 10px 0px 10px" }} onChange={handelChange} />

                </RadioGroup>
            </FormControl>
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
            </div>



        </form >






    )
}

export default Form