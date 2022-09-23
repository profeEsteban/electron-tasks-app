import { Link, Outlet } from "react-router-dom"

function Tasks() {

  return (
    <div style={{background: "blue", padding: 24}}>
      <div style={{background: "green"}}>
        <h1>Tareas</h1>
        <Link to="list">Ir a Lista</Link><br />
        <Link to="new">Ir a Nueva</Link>
      </div>
      <div style={{background: "red"}}>
        <Outlet />
      </div>
      <div style={{background: "yellow"}}>
        Pie de pagina
      </div>

    </div>
  )
}

export default Tasks