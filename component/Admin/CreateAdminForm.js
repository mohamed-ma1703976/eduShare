import React, { useState } from "react";
import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    Link,
    Toolbar
} from "@mui/material";
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../../Firebase/Firebase";

export default function CreateAdminForm({ setOpenn }) {
    const router = useRouter();

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
    });


    function handleChange(event) {
        setSignUpData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }

    async function handleSignUp(e) {
        e.preventDefault();

        const auth = getAuth(app);
        if (signUpData.firstName === "" || signUpData.lastName === "" || signUpData.email === "" || signUpData.phone === "") {
            alert("All Field Are Required")
        } else if (signUpData.password.length < 6) {
            alert("Password should be at least 6 Digits")
        }

        let collectedData = {
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            email: signUpData.email,
            phone: signUpData.phone,

        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
            const user = userCredential.user;
            const db = getFirestore(app);
            const docRef = doc(db, "Admin", user.uid);
            await setDoc(docRef, collectedData);
            router.reload()
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }
    return (





        <form onSubmit={handleSignUp}>
            <Stack direction={"column"} gap={2} sx={{ margin: "10px" }}>
                <Stack direction={"row"} gap={2}>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />
                </Stack>

                <Stack direction={"row"} gap={2}>
                    <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        name="phone"
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Enter Email"
                        variant="outlined"
                        name="email"
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />
                </Stack>

                <Stack direction={"row"} gap={2}>
                    <TextField
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                        name="password"
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />
                </Stack>
                <Toolbar>
                    <Button
                        sx={{
                            backgroundColor: "#00adb5",
                            height: 45,
                            fontSize: 22,
                            fontWeight: "bold",
                            margin: "10px 200px 10px 0 ",
                            width: "60%",

                        }}
                        variant="contained"
                        type="submit"
                        onClick={handleSignUp}
                    >
                        Register
                    </Button>
                    <Button variant="contained" onClick={() => setOpenn(false)}
                        sx={{
                            backgroundColor: "#00adb5",
                            height: 45,
                            fontSize: 22,
                            fontWeight: "bold",
                            margin: "10px 0",
                            width: "60%",
                            color: "white",
                        }}

                    >
                        cancel
                    </Button>
                </Toolbar>
            </Stack>
        </form>



    );
}
