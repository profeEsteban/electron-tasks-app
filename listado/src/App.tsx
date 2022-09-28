import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Winows/Home';
import TileBar from './Components/TileBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from './Components/AppBar';
import NewTask from './Winows/NewTask';
import Tasks from './Winows/Tasks';

function App() {
  return (
    <BrowserRouter>
      <TileBar />
      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">
          <AppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/new" element={<NewTask />} />
            <Route path="/profile" element={<h1>Perfil</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
