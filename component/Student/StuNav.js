import { AppBar, Toolbar, Typography, MenuItem, Menu, styled, InputBase } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React, { useState } from 'react'
import { useRouter } from "next/router"
import useFetch from '../../hooks/useFetch';
function StuNav({ setCourseSearch }) {
    const { data, loading, error } = useFetch('http://localhost:1337/api/logins')

    const router = useRouter()

    const [open, setOpen] = useState(false)




    return (

        <AppBar position='sticky' sx={{ backgroundColor: "#FDFEFE" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >

                <Toolbar >
                    <Typography variant='h6' sx={{ color: "#454545", fontWeight: "800", margin: "0 0 0 -23px", cursor: "pointer" }}>Edu<span style={{ color: "#1ABC9C" }} onClick={() => router.push("/Student")}>Share</span></Typography>
                    <Typography variant='h6' sx={{ padding: "6px", margin: "0 0 0 66px", color: "#454545", fontWeight: "800", cursor: "pointer" }}>Student </Typography>
                </Toolbar>



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

export default StuNav