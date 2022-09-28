import { Link } from "react-router-dom";

function AppBar() {

  return (
    <div style={{
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Link to="">
        <button>Tareas</button>
      </Link>
      <button>Nueva Tarea</button>
      <button>Perfil</button>
    </div>
  )
}

export default AppBar;