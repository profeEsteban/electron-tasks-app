import { Box, TextField, Button, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface Menu {
  link: string,
  title: string,
  selected: boolean
}

function Home() {
  let menus: Menu[] = ["Inicio", "new", "Cuenta", "Salir"].map(item => {
    return {
      link: item,
      title: item,
      selected: false,
    }
  });

  const navigate = useNavigate()
  const [selected, setSelected] = useState(-1);

  const handleKey = (e: KeyboardEvent) => {
    let { keyCode } = e;
    console.log(keyCode)
    switch (keyCode) {
      case 40: //abajo
        setSelected(actual => actual >= menus.length ? 0 : actual+1)
        break;
      case 38: //arriba
      setSelected(actual => actual <= 0 ? menus.length -1 : actual-1)
        break;
      case 13:
        navigate(menus[selected].link)
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  })
  return (
    <Box>
      <Paper sx={{
        margin: 4,
        padding: 4,
      }}>
        Menus
        {menus.map((menu, index) => {
          let isSelected = index == selected
          return <div>
            {isSelected ? ">" : ""}
            {menu.title}
          </div>
        })}
      </Paper>
      <h1>Tareas</h1>
      <Link to="/new"><Button>Crear Tarea</Button></Link>
      <ul id="tasksListUI"></ul>
    </Box>
  )
}

export default Home