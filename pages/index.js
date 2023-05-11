import { Grid, Paper } from "@mui/material";
import Login from "../component/Login";
import { useState } from "react";

export default function AdminDashBoard() {
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          style={{
            backgroundImage: `url(${"https://i.ibb.co/6bJ0VFb/Background.jpg"})`,
            backgroundSize: "cover",
            color: "#f5f5f5",
            height: "100vh",
          }}
        >
          <Login setUserr={setUser} userr={user} />
        </Paper>
      </Grid>
    </Grid>
  );
}
