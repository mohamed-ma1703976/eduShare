import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Groups3Icon from "@mui/icons-material/Groups3";
import { useMediaQuery } from '@mui/material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import MessageIcon from "@mui/icons-material/Message";
function InstSidebar() {
  const router = useRouter();
  const controls = useAnimation();
  function handelClickRoute() {
    router.push("/Instructor/uploadcontanet");
  }

  useEffect(() => {
    handelClickRoute;
  });
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
      sx={{ maxWidth: "250px" }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor")}
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
            <ListItemText sx={{ color: "#909497" }}  primary={useMediaQuery('(min-width:769px)') ? "Home": null } />
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
            <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "Upload Content": null } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor/mystudents")}
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
            <ListItemText sx={{ color: "#909497" }}  primary={useMediaQuery('(min-width:769px)') ? "My Students": null } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor/myBlogs")}
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
            <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "My Blogs": null } /> 
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor/myCalendar")}
            sx={{
              "&:hover": {
                backgroundColor: "#1ABC9C",
                color: "primary.contrastText",
              },
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#909497" }} primary={useMediaQuery('(min-width:769px)') ? "My Calendar": null } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor/Messages")}
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
            <ListItemText sx={{ color: "#909497" }}  primary={useMediaQuery('(min-width:769px)') ? "Inbox": null } />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push("/Instructor/profile")}
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
            <ListItemText sx={{ color: "#909497" }}primary={useMediaQuery('(min-width:769px)') ? "Profile": null }  />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default InstSidebar;
