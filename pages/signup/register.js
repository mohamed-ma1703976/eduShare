import { Paper } from "@mui/material"
import RoleSelection from "../../component/Signup/RoleSelection"
import Head from 'next/head'

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
      <Head>
        <title>Registration</title>
        <link rel="icon" href="https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png" />
      </Head>
      <RoleSelection />
    </Paper>
  )
}
