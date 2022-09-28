import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import { Box, Button, TextField } from '@mui/material';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './wondows/Home';
import NewTask from './wondows/NewTask';
import Dashboard from './layouts/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <div className="mainApp">
        <TitleBar title={"Lita de Tareas"} />
        <div className="letra-container">
          {["T", "A", "R", "E", "A", "S"].map((letra, i) =>
            <span className={
              ["letra", `delay${i}`].join(" ")}>{letra}</span>
          )}
        </div>
        <div className="contentArea">
          <div className="contentPage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<NewTask />} />

              <Route path="/login" element={<h1>login</h1>} />
              <Route path="/home" element={<h1>home</h1>} />
              <Route path="/storage" element={<h1>storage</h1>} />
              <Route path="/scores" element={<h1>scores</h1>} />
              <Route path="/games" element={<h1>games</h1>} />

              <Route path="/admins/dashboard" element={<Dashboard />} >
                <Route path="" element={<h1>HIJO PRINCIPAL</h1>} />
                <Route path="usuarios" element={<h1>usuarios</h1>} />
                <Route path="grupos" element={<h1>grupos</h1>} />
                <Route path="roles" element={<h1>roles</h1>} />
              </Route>

            </Routes>
            <Link to="/" >Inicio</Link>
            <Link to="/admins/dashboard" >dashboard</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
