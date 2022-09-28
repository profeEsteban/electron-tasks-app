import { Box, TextField, Button, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Menus from "../components/Menus";
import Menu from "../models/Menu";


function Home() {
  let menus: Menu[] = [
    { title: "Inicio", link: "/home", selected: false },
    { title: "Tienda", link: "/storage", selected: false },
    { title: "Puntaje", link: "/scores", selected: false },
    { title: "Juegos", link: "/games", selected: false },
    { title: "Salir", link: "#", selected: false },
  ]
  return (
    <Box>
      <Menus menus={menus} />
      <h1>Tareas</h1>
      <Link to="/new"><Button>Crear Tarea</Button></Link>
      <ul id="tasksListUI"></ul>
    </Box>
  )
}

export default Home