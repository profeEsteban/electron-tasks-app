import { Link, Outlet } from "react-router-dom"

function Tasks() {

  return (
    <div style={{padding: 24}}>
      <div>
        <h1>Tareas</h1>
        <Link to="list">Ir a Lista</Link><br />
        <Link to="new">Ir a Nueva</Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        Pie de pagina
      </div>

    </div>
  )
}

export default Tasks