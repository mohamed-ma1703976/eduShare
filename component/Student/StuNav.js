import { AppBar, Toolbar, Typography, MenuItem, Menu } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { auth, collection, db } from '../../Firebase/Firebase';
import { getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
function StuNav({ setCourseSearch }) {

    const router = useRouter()

    const [open, setOpen] = useState(false)

    const [students, setStudents] = useState([]);
    // const currentUser = auth.currentUser.uid
    // let fName = students.find(s=>s.id === currentUser)?.attributes.firstName
    // let lName = students.find(s=>s.id === currentUser)?.attributes.lastName

    // console.log(currentUser)
    useEffect(() => {
        const fetchStudents = async () => {
            const studentCollection = collection(db, 'Student');
            const studentSnapshot = await getDocs(studentCollection);
            const studentList = studentSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setStudents(studentList);
        };

        fetchStudents();
    }, []);

    const idOfCurrentUser = auth?.currentUser?.uid
    let name = students.find(s => s.id === idOfCurrentUser)?.attributes.displayName

    function handelSignOut() {

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('User signed out.');
            })
            .catch((error) => {
                // An error happened.
                console.error(error);
            });
        router.push('/')
    }
    return (

        <AppBar position='sticky' sx={{ backgroundColor: "#FDFEFE" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant='h6' sx={{ color: "#454545", fontWeight: "800", margin: "0 0 0 -23px", cursor: "pointer" }}>
                    Edu<span style={{ color: "#1ABC9C" }} onClick={() => router.push("/Student")}>Share</span>
                </Typography>
                <Typography variant='h6' sx={{ padding: "6px", margin: "0 0 0 66px", color: "#454545", fontWeight: "800", cursor: "pointer" }}>
                    Welcome {name}!
                </Typography>
                <div>
                    {/* <MapsUgcIcon sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} />
                    <NotificationsNoneIcon sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} /> */}
                    <SettingsIcon onClick={(e) => setOpen(true)} sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} />
                </div>
            </Toolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ margin: "30px 0 0 0", cursor: "pointer" }}
            >
                <MenuItem onClick={handelSignOut} sx={{ cursor: "pointer" }}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default StuNav