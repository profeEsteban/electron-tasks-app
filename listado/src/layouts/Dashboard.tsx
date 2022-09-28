import { Link, Outlet } from "react-router-dom";

function Dashboard() {

  return (
    <div>
      <h3>Rama padre</h3>
      <Link to="usuarios" >usuarios</Link>
      <Link to="grupos" >grupos</Link>
      <Link to="roles" >roles</Link>
      <p>Inicio</p>
      <Outlet />
      <p>Fin</p>
    </div>
  )
} 

export default Dashboard;