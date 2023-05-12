import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
import { db, collection } from "../../Firebase/Firebase"
import { app } from "../../Firebase/Firebase";
import React, { useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Link,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Head from 'next/head'
export default function Registration() {
    const router = useRouter();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        specialization: "",
        personalInfo: "",
    });

    function handleChange(event) {
        setSignUpData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }
    console.log(signUpData)
    async function handleSignUp(e) {
        e.preventDefault();
        if(signUpData.password.length < 6){
            alert('Password lenght should be more than 6 digits')
        }else if(signUpData.email ==="" || signUpData.firstName === "" || signUpData.lastName ==="" || signUpData.phone ==="" ||signUpData.personalInfo ==="" || signUpData.specialization ===""){
            alert('All Fields are required')
        }

        const auth = getAuth(app);

        let collectedData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone,
            specialization: signUpData.specialization,
            personalInfo: signUpData.personalInfo,
            status: "Pending",
            myCourse: []
        };
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
            const user = userCredential.user;
            const db = getFirestore(app);
            const docRef = doc(db, "Instructor", user.uid);
            await setDoc(docRef, collectedData);
            router.push("/");
        } catch (error) {
            console.error("Error signing up:", error);
        }
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
             <Head>
        <title>Instructor Registration</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
            <Grid
                container
                justifyContent={{ sm: "center" }}
                alignItems={{ sm: "center" }}
                height={"100vh"}
            >
                <Paper
                    sx={{
                        width: isSmallScreen ? '90%' : '42%',
                        height: isSmallScreen ? 'auto' : '80vh',
                        margin: isSmallScreen ? 'auto' : '0 0 0 400px',
                        backgroundColor: "white",
                        padding: isSmallScreen ? 2 : 5,
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
                            variant={isSmallScreen ? 'h5' : 'h3'}
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
                            variant={isSmallScreen ? 'h7' : 'h6'}
                            sx={{
                                color: "#454545",
                                fontWeight: "800",
                                margin: "0 0 0 -23px",
                                textAlign: "center",
                            }}
                        >
                            ( Instructor Registration )
                        </Typography>
                            <form onSubmit={handleSignUp}>

                                <Stack direction={"column"} gap={2} sx={{ margin: "10px" }}>
                                    <Stack direction={"row"} gap={2}>



                                        <TextField
                                            id="outlined-basic"
                                            label="Firs tName"
                                            variant="outlined"
                                            name="firstName"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}



                                        />

                                        <TextField
                                            id="outlined-basic"
                                            label="Last Name"
                                            variant="outlined"
                                            name="lastName"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}


                                        />
                                    </Stack>


                                    <Stack direction={"row"} gap={2}>

                                        <TextField
                                            id="outlined-basic"
                                            label="Phone Number"
                                            variant="outlined"
                                            name="phone"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}


                                        />

                                        <TextField
                                            id="outlined-basic"
                                            label="Specialization"
                                            variant="outlined"
                                            name="specialization"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}



                                        />
                                    </Stack>
                                    <Stack direction={"row"} gap={2}>

                                        <TextField
                                            id="outlined-basic"
                                            label="Write about youself (Experiance,personla Info,etc..)"
                                            variant="outlined"
                                            name="personalInfo"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}


                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Email"
                                            variant="outlined"
                                            name="email"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px", width: "50%" }}


                                        />
                                    </Stack>
                                    <Stack direction={"row"} gap={1}>

                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Password"
                                            variant="outlined"
                                            name="password"
                                            onChange={handleChange}
                                            sx={{ margin: "10px 10px 10px 10px" }}
                                            margin="normal"
                                            placeholder="Password"
                                            type="password"
                                            fullWidth


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
                                        onClick={handleSignUp}
                                    >
                                        Register
                                    </Button>
                                </Stack>

                            </form>

                        </Stack>
                        <div style={{ margin: "-10px 0 0 10px" }}>
                            {/* <Link href="/" variant="body2" color="inherit"> Back to login page</Link> */}
                            <Typography variant="body2" color="inherit" sx={{
                                textDecoration: 'underline', cursor: "pointer"
                            }} onClick={() => router.push('/')}> Back to login page</Typography>
                        </div>

                    </Paper>
                </Grid >
            </Paper>

    )
}