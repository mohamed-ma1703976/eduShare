import React, { use, useEffect, useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Link
} from "@mui/material";
import { Box } from "@mui/system";
import Router, { useRouter } from 'next/router';
import useFetch from "../../hooks/useFetch";

// Todo check if the email exist in the login database befor sign up new account 
export default function registration() {

    const router = useRouter()
    const { data, loading, error } = useFetch('http://localhost:1337/api/logins')

    console.log(data)

    const [signUpdata, setsignUpdata] = useState({
        email: "",
        password: "",
        FirstName: "",
        LastName: "",
        phone: "",
        Specialization: "",
        PersonalInfo: "",

    })



    function handelChange(event) {
        setsignUpdata(pre => {
            return {
                ...pre,
                [event.target.name]: event.target.value
            }

        })

    }


    async function handelLogin(e) {
        e.preventDefault()

        let collectedData = {
            email: signUpdata.email,
            password: signUpdata.password,
            firstname: signUpdata.FirstName,
            lastname: signUpdata.LastName,
            phonenumber: signUpdata.phone,
            PersonalInfo: signUpdata.PersonalInfo,
            Specialization: signUpdata.Specialization,
            Status: "Pending"
        }

        try {

            const res = await fetch('http://localhost:1337/api/instructor-signups',
                {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ data: collectedData }),
                    method: "POST",

                }
            )



            console.log(res)
            //  alert("student added ")
            //router.reload()

        } catch (err) {
            console.log(err)
        }

        let collectedData1 = {
            email: signUpdata.email,
            password: signUpdata.password,
            Role: "Instructor",
            firstname: signUpdata.FirstName


        }
        try {
            const res = await fetch('http://localhost:1337/api/logins',
                {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ data: collectedData1 }),
                    method: "POST",

                }
            )



            console.log(res)

            //router.reload()

        } catch (err) {
            console.log(err)
        }
        //  }

        // })

        router.push("/")

    }
    return (








        <Paper
            style={{
                backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5",
                width: "100vw",
            }}
        >





            <Grid
                container
                justifyContent={{ sm: "center" }}
                alignItems={{ sm: "center" }}
                height={"100vh"}
            >
                <Paper
                    s sx={{
                        width: "42%",
                        height: "80vh",
                        margin: "0 0 0 400px",
                        backgroundColor: "white",
                        padding: 5,
                        pb: 10,
                        boxShadow: {
                            xs: "none",
                            md:
                                "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
                        },
                    }}
                >
                    <Stack direction={"column"} gap={2}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "#454545",
                                fontWeight: "800",
                                margin: "0 0 0 -23px",
                                textAlign: "center",
                            }}
                        >
                            Edu<span style={{ color: "#1ABC9C" }}>Share</span>
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#454545",
                                fontWeight: "800",
                                margin: "0 0 0 -23px",
                                textAlign: "center",
                            }}
                        >
                            ( Instructor Registration )
                        </Typography>
                        <form onSubmit={handelLogin}>

                            <Stack direction={"column"} gap={2} sx={{ margin: "10px" }}>
                                <Stack direction={"row"} gap={2}>



                                    <TextField
                                        id="outlined-basic"
                                        label="Firs tName"
                                        variant="outlined"
                                        name="FirstName"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}



                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        name="LastName"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                </Stack>


                                <Stack direction={"row"} gap={2}>

                                    <TextField
                                        id="outlined-basic"
                                        label="Phone Number"
                                        variant="outlined"
                                        name="phone"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Specialization"
                                        variant="outlined"
                                        name="Specialization"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}



                                    />
                                </Stack>
                                <Stack direction={"row"} gap={2}>

                                    <TextField
                                        id="outlined-basic"
                                        label="Write about youself (Experiance,personla Info,etc..)"
                                        variant="outlined"
                                        name="PersonalInfo"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Email"
                                        variant="outlined"
                                        name="email"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                </Stack>
                                <Stack direction={"row"} gap={1}>

                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Password"
                                        variant="outlined"
                                        name="password"
                                        onChange={handelChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                </Stack>

                                <Button
                                    sx={{
                                        backgroundColor: "#00adb5",
                                        height: 45,
                                        fontSize: 22,
                                        fontWeight: "bold"
                                    }}
                                    variant="contained"
                                    type="submit"
                                    onClick={handelLogin}
                                >
                                    Register
                                </Button>
                            </Stack>

                        </form>

                    </Stack>
                    <div style={{ margin: "-10px 0 0 10px" }}>
                        <Link href="/" variant="body2" color="inherit"> Back to login page</Link>
                    </div>

                </Paper>
            </Grid >
        </Paper>

    );
}
