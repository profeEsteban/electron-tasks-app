import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Winows/Home';
import TileBar from './Components/TileBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from './Components/AppBar';
import NewTask from './Winows/NewTask';
import Tasks from './Winows/Tasks';
import Login from './Winows/Login';
import Register from './Winows/Register';
const ipcRenderer = window.require('electron').ipcRenderer

function App() {
  const [user, setUser] = useState<string | undefined>(undefined)

  ipcRenderer.on("logued", (e: any, userLogued: string) => {
    console.log("userLogued", userLogued)
    setUser(userLogued)
  })

  return (
    <BrowserRouter>
      <TileBar />
      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">
          <AppBar user={user} signout={() => setUser(undefined)} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/new" element={<NewTask />} />
            <Route path="/profile" element={<h1>Perfil</h1>} />
            {!user && <>
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Register />} />
            </>}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
