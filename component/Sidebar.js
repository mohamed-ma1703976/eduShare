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
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';


function Sidebar() {
    const router = useRouter()
    const controls = useAnimation();

    function handelClickRoute() {
        router.push("/Admin/course")

    }
    useEffect(() => {
        handelClickRoute;
        controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    }, []);
    
    return (
        <Box
            component={motion.div}
            animate={controls}
            initial={{ opacity: 0, x: -100 }}
            bgcolor="#FDFEFE"
            flex={1}
            p={1}
            position="sticky"
            sx={{ maxWidth: '250px' }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/Admin")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <GridViewIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Dashboard": null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Courses": null} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => router.push("/Admin/Blogs")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <NewspaperIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Blogs": null} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton onClick={() => router.push("/Admin/Events")} sx={{
                        "&:hover": {
                            backgroundColor: "#1ABC9C",
                            color: "primary.contrastText",
                        },
                        transition: "background-color 0.3s ease-in-out",
                    }}>
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Events": null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Instructors": null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Students": null} />
                    </ListItemButton>
                </ListItem>
   





            </List>
        </Box>

    )
}

export default Sidebar