import React, { useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Link
} from "@mui/material";
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";
import { db, collection } from "../../Firebase/Firebase"
import { app } from "../../Firebase/Firebase";

export default function Registration() {
    const router = useRouter();

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

        const auth = getAuth(app);

        let collectedData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone,
            specialization: signUpData.specialization,
            personalInfo: signUpData.personalInfo,
            status: "Pending"
        };
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
            const user = userCredential.user;
            const db = getFirestore(app);
            const docRef = doc(db, "Instructor", user.uid);
            await setDoc(docRef, collectedData);
            router.push("/Instructor");
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
                        <form onSubmit={handleSignUp}>

                            <Stack direction={"column"} gap={2} sx={{ margin: "10px" }}>
                                <Stack direction={"row"} gap={2}>



                                    <TextField
                                        id="outlined-basic"
                                        label="Firs tName"
                                        variant="outlined"
                                        name="firstName"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}



                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        name="lastName"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                </Stack>


                                <Stack direction={"row"} gap={2}>

                                    <TextField
                                        id="outlined-basic"
                                        label="Phone Number"
                                        variant="outlined"
                                        name="phone"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="Specialization"
                                        variant="outlined"
                                        name="specialization"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}



                                    />
                                </Stack>
                                <Stack direction={"row"} gap={2}>

                                    <TextField
                                        id="outlined-basic"
                                        label="Write about youself (Experiance,personla Info,etc..)"
                                        variant="outlined"
                                        name="personalInfo"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter Email"
                                        variant="outlined"
                                        name="email"
                                        onChange={handleChange}
                                        sx={{ margin: "10px 10px 10px 10px" }}


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
                        <Link href="/" variant="body2" color="inherit"> Back to login page</Link>
                    </div>

                </Paper>
            </Grid >
        </Paper>

    );
}
