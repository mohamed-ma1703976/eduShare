
import { Paper } from "@mui/material"
import Login from '../component/Login'
import { useState } from "react";


export default function AdminDashBoard() {

  const [user, setUser] = useState("");
  console.log(user);

  // function handleLogin(name) {
  //   setUser(name);
  // }
  return (
    <Paper
      style={{
        backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
        width: "100vw",
      }}
    >

      <Login setUserr={setUser} userr={user} />
    </Paper>
  )
}
