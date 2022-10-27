import { useState } from "react"
import { Button, Paper, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";

const ipcRenderer = window.require("electron").ipcRenderer


function Login({ changeUser }: { changeUser: (id: string) => void }) {
  const [username, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  function login() {

    if (username && password) {
      let credentials = {
        username, password
      }
      ipcRenderer.invoke("login", credentials).then((r: string) => {
        console.log("USER ID: ", r)
        changeUser(r)
      })
      // setMessage("login")
      // navigate("/lista")
    } else
      setMessage("error login")
  }


  function signup() {


    if (password === passwordConfirm && username) {
      let credentials = {
        username, password
      }
      ipcRenderer.invoke("signup", credentials).then((r: string) => {
        alert("USER ID: " + r)
      })

      setMessage("signup")
    } else
      setMessage("error password")
  }

  return (
    <Paper style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      marginTop: 24,
      width: 300,
    }}>
      <h1>Bienvenido</h1>

      <p>Por favor inicia sesion</p>

      <TextField style={{
        marginBottom: 24
      }} onChange={e => setEmail(e.target.value)} type="user" label="user" placeholder="ingrese user" name="user" id="user" />
      <TextField style={{
        marginBottom: 24
      }} onChange={e => setPassword(e.target.value)} type="password" label="password" placeholder="ingrese password" name="password" id="password" />
      <TextField style={{
        marginBottom: 24
      }} onChange={e => setPasswordConfirm(e.target.value)} type="password" label="passwordConfirm" placeholder="ingrese passwordConfirm" name="passwordConfirm" id="passwordConfirm"
        error={password != passwordConfirm}
        helperText={password != passwordConfirm ? "Las contraseñas no coinciden" : ""}
      />

      <Button variant="contained" color="primary" onClick={e => login()}>Iniciar sesion</Button>
      <Button variant="outlined" color="secondary" onClick={e => signup()}>Registrarse</Button>

      <p id="mensaje">Mensaje: {message}</p>
    </Paper>
  )
}

export default Login;