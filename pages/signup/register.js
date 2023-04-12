import { Paper } from "@mui/material"
import RoleSelection from "../../component/Signup/RoleSelection"

export default function register() {
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

      <RoleSelection />
    </Paper>
  )
}
