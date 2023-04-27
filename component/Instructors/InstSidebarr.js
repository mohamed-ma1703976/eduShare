import { Box, List, ListItemButton, ListItemIcon, ListItem, ListItemText } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Groups2Icon from "@mui/icons-material/Groups2";
import Groups3Icon from "@mui/icons-material/Groups3";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function InstSidebar() {
  const router = useRouter();

  function handelClickRoute() {
    router.push("/Instructor/uploadcontanet");
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
      sx={{ maxWidth: "250px" }} // Add this line
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
            <ListItemText sx={{ color: "#909497" }} primary="Upload Content" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/Instructor/mystudents")} sx={{
            "&:hover": {
              backgroundColor: "#1ABC9C",
              color: "primary.contrastText",
            },
            transition: "background-color 0.3s ease-in-out",
          }}>
            <ListItemIcon>
              <Groups3Icon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#909497" }} primary="My Students" />
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
            <ListItemText sx={{ color: "#909497" }} primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default InstSidebar;
