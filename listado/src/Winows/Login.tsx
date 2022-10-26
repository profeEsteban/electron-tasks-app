import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const ipcRenderer = window.require('electron').ipcRenderer

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function login(): void {
    let credentials = {
      username,
      password
    }
    ipcRenderer.send("login", credentials)
  }

  return (
    <Paper sx={{
      margin: 4,
      padding: 4
    }}>
      <Stack>
        <h1>Login</h1>
        <TextField sx={{mb: 2}} label="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} type="text" />
        <TextField sx={{mb: 2}} label="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} type="text" />
        <Button onClick={e => login()}>Login</Button>
      </Stack>
    </Paper>
  )
}

export default Login