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
import { useMediaQuery } from '@mui/material';

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
            sx={{
                maxWidth: '250px',
                '@media (max-width: 768px)': {
                    position: 'static',
                    maxWidth: '100%',
                    marginBottom: '1rem'
                }
            }}
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Home' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'My Courses' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Instructors Achievements' : null}/>
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Courses' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Blogs' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary
                            ={useMediaQuery('(min-width:769px)') ? 'Events' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Inbox' : null} />
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
                        <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? 'Profile' : null} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default StuSideBar;


