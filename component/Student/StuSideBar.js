import { Box, List, ListItemButton, ListItemIcon, ListItem, ListItemText } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useRouter } from "next/router";
import HomeIcon from '@mui/icons-material/Home';
import React, { useEffect } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { motion, useAnimation } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';
function StuSideBar() {
    const router = useRouter();
    const controls = useAnimation();
    function handelClickRoute() {
        router.push("/Student/mycourses");
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
                    <ListItemButton
                        onClick={() => router.push('/Student')}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={handelClickRoute}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="My Courses" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => router.push("/Student/InstructorAciveCard")}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <Groups3Icon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Instructors Achievements" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => router.push("/Student/courses")}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Courses" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => router.push('/Student/Blogs')}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <NewspaperIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Blogs" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => router.push('/Student/Events')}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Events" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton
                        onClick={() => router.push('/Student/Messages')}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Inbox" />
                    </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => router.push('/Student/Profile')}
                        sx={{
                            "&:hover": {
                                backgroundColor: "#1ABC9C",
                                color: "primary.contrastText",
                            },
                            transition: "background-color 0.3s ease-in-out",
                        }}
                    >
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "#909497" }} primary="Profile" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default StuSideBar;
