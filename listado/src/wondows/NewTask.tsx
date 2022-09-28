import { Box, TextField, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";

function NewTask() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function createTasks(): void {

  }


  return (
    <Paper sx={{
      margin: 4,
      padding: 2
    }}>
      <p>
        title: {title}
      </p>
      <p>
        description: {description}
      </p>
      <TextField value={title} onChange={e => setTitle(e.target.value)} label="Titulo" variant="outlined" />
      <TextField value={description} onChange={e => setDescription(e.target.value)} label="Descripcion" variant="outlined" />
      <Button onClick={e => createTasks()}>Guardar Tarea</Button>
    </Paper>
  )
}

export default NewTask