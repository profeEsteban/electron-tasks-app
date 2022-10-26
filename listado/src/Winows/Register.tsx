import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const ipcRenderer = window.require('electron').ipcRenderer

function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  function signin(): void {
    let credentials = {
      username,
      password
    }
    if (password === passwordConfirm)
      ipcRenderer.send("signin", credentials)
    else
      alert("VERIFICAR PASSWORD")
  }

  return (
    <Paper sx={{
      margin: 4,
      padding: 4
    }}>
      <Stack>
        <h1>Register</h1>
        <TextField sx={{ mb: 2 }} label="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} type="text" />
        <TextField sx={{ mb: 2 }} label="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <TextField sx={{ mb: 2 }} label="passwordConfirm" placeholder="passwordConfirm" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="text" />
        <Button onClick={e => signin()}>Create User</Button>
      </Stack>
    </Paper>
  )
}

export default Register