import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

function NewTask() {

  function save(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Paper sx={{
      margin: 4,
      padding: 4
    }}>
      <Stack>
        <h1>Nueva Tarea</h1>
        <TextField id="title" type="text" />
        <TextField id="description" type="text" />
        <Button onClick={e => save()}>Guardar</Button>
      </Stack>
    </Paper>
  )
}

export default NewTask