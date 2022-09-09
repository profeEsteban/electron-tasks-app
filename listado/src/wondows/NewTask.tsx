import { Box, TextField, Button, Paper } from "@mui/material";

function NewTask() {
  function createTasks(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <Paper sx={{
      margin: 4,
      padding: 2
    }}>
      <TextField label="Titulo" variant="outlined" />
      <TextField label="Descripcion" variant="outlined" />
      <Button onClick={e => createTasks()}>Guardar Tarea</Button>
    </Paper>
  )
}

export default NewTask