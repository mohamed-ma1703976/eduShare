import { AppBar, Toolbar, Typography, MenuItem, Menu, styled, InputBase } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import { useRouter } from "next/router"
import useFetch from '../hooks/useFetch';
function Navbar({ setCourseSearch }) {
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [path, setPath] = useState("Admin/course")




    return (

        <AppBar position='sticky' sx={{ backgroundColor: "#FDFEFE" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >

                <Toolbar >
                    <Typography variant='h6' sx={{ color: "#454545", fontWeight: "800", margin: "0 0 0 -23px", cursor: "pointer" }}>Edu<span style={{ color: "#1ABC9C" }} onClick={() => router.push("/Admin")}>Share</span></Typography>
                    {router.pathname === "/Admin" || router.pathname === "/Admin" ? <Typography variant='h6' sx={{ padding: "6px", margin: "0 0 0 66px", color: "#454545", fontWeight: "800", cursor: "pointer" }}>DashBoard</Typography> : <Typography variant='h6' sx={{ padding: "6px", margin: "0 0 0 66px", color: "#454545", fontWeight: "800", cursor: "pointer" }}>Courses</Typography>}
                </Toolbar>


                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "40%" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 2 }}
                        placeholder="Search here .."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        name="CourseSearch"
                        onChange={(e)=>setCourseSearch(e.target.value)}

                    />
                    <IconButton type="button" sx={{ p: '10px', color: "#454545" }} aria-label="search">
                        <SearchIcon sx={{ color: "#1ABC9C" }} />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                </Paper>


                <Toolbar >
                    <MapsUgcIcon sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} />
                    <NotificationsNoneIcon sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} />
                    <SettingsIcon onClick={(e) => setOpen(true)} sx={{ margin: "0 10px 0 10px", color: "#B2BABB", cursor: "pointer" }} />

                </Toolbar>

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
                <MenuItem onClick={() => router.push('/')} sx={{ cursor: "pointer" }}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar