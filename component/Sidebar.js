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

function Sidebar() {
    const router = useRouter()

    function handelClickRoute() {
        router.push("/Admin/course")

    }
    useEffect(() => {
        handelClickRoute
    })

    return (
        <Box bgcolor="#FDFEFE" flex={1} p={1} position="sticky" sx={{ maxWidth: "250px" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/Admin/dashboard")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <GridViewIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton onClick={handelClickRoute} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Courses" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <EventNoteIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Schedule" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/Admin/instructors")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <Groups2Icon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Instructors" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/Admin/student")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <Groups3Icon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Students" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Profile" />
                    </ListItemButton>
                </ListItem>
    
                <ListItem disablePadding>
                    <ListItemButton sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <LocalActivityIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Activity" />
                    </ListItemButton>
                </ListItem>    





            </List>
        </Box>

    )
}

export default Sidebar