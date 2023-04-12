import { Box, List, ListItemButton, ListItemIcon, ListItem, ListItemText } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Groups2Icon from '@mui/icons-material/Groups2';
import Groups3Icon from '@mui/icons-material/Groups3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { useRouter } from "next/router"
import React, { useEffect } from 'react'

function StuSideBar() {
    const router = useRouter()

    function handelClickRoute() {
        router.push("/Student/mycourses")

    }
    useEffect(() => {
        handelClickRoute
    })

    return (

        <Box bgcolor="#FDFEFE" flex={1} p={1} position="sticky">
            <List>
                {/* <ListItem disablePadding >
                    <ListItemButton onClick={()=>router.push("/Admin/dashboard")} >
                        <ListItemIcon >
                            <GridViewIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Dashboard" />
                    </ListItemButton>
                </ListItem> */}

                <ListItem disablePadding>
                <ListItemButton onClick={()=>router.push('/Student')}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={handelClickRoute}>
                        <ListItemIcon >
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="My Courses" />
                    </ListItemButton>
                </ListItem>



                <ListItem disablePadding>
                    <ListItemButton onClick={()=>router.push('/Student/courseregistration')}>
                        <ListItemIcon>
                            <EventNoteIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Registration" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton onClick={()=>router.push('/Student/Profile')}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Profile" />
                    </ListItemButton>
                </ListItem>





                {/* <ListItem disablePadding>
                    <ListItemButton onClick={()=>router.push("/Admin/instructors")} >
                        <ListItemIcon>
                            <Groups2Icon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Instructors" />
                    </ListItemButton>
                </ListItem>






                <ListItem disablePadding>
                    <ListItemButton onClick={()=>router.push("/Admin/student")}>
                        <ListItemIcon>
                            <Groups3Icon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Students" />
                    </ListItemButton>
                </ListItem>






                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Profile" />
                    </ListItemButton>
                </ListItem>



                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                            <LocalActivityIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Activity" />
                    </ListItemButton>
                </ListItem> */}





            </List>
        </Box>

    )
}

export default StuSideBar