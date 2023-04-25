import { Box, List, ListItemButton, ListItemIcon, ListItem, ListItemText } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useRouter } from "next/router";
import React, { useEffect } from 'react';

function StuSideBar() {
    const router = useRouter();

    function handelClickRoute() {
        router.push("/Student/mycourses");
    }

    useEffect(() => {
        handelClickRoute;
    });

    return (
        <Box
            bgcolor="#FDFEFE"
            flex={1}
            p={1}
            position="sticky"
            sx={{ maxWidth: "250px" }}
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
                            <AccountCircleIcon />
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
