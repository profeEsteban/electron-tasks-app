import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

function MyAppBar({ user, signout }: { user?: string, signout: () => void }) {

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar
        sx={{
          background: "#393939",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#a7a7a9" }}>Inicio</Typography>
        </Link>
        <Link to="/tasks" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#a7a7a9" }}>Tareas</Typography>
        </Link>
        <Link to="/tasks/new" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#a7a7a9" }}>Nueva</Typography>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#a7a7a9" }}>Perfil</Typography>
        </Link>
        {!!user ? <Typography onClick={signout} sx={{ color: "#a7a7a9" }}>Cerrar Sesion</Typography> :
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#a7a7a9" }}>Login</Typography>
            </Link>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#a7a7a9" }}>Sign In</Typography>
            </Link>
          </>}
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar;