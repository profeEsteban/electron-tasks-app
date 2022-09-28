import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

function MyAppBar() {

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar
        sx={{
          background: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link to="/"><Typography>Inicio</Typography></Link>
        <Link to="/tasks"><Typography>Tareas</Typography></Link>
        <Link to="/tasks/new"><Typography>Nueva</Typography></Link>
        <Link to="/profile"><Typography>Perfil</Typography></Link>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar;