import { Box, TextField, Button, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Menus from "../components/Menus";
import TasksList from "../components/TasksList";
import Menu from "../models/Menu";
const ipcRenderer = window.require("electron").ipcRenderer


function Home() {
  const navigate = useNavigate()

  let menus: Menu[] = [
    { title: "Inicio", function: () => navigate("/home") },
    { title: "Tienda", function: () => navigate("/storage") },
    { title: "Puntaje", function: () => navigate("/scores") },
    { title: "Juegos", function: () => navigate("/games") },
    { title: "Salir", function: () => ipcRenderer.send("exit") },
  ]
  return (
    <Box>
      {/* <Menus menus={menus} /> */}
      <h1>Tareas</h1>
      <Link to="/new"><Button>Crear Tarea</Button></Link>
      <TasksList />
    </Box>
  )
}

export default Home