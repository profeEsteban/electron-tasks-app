import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import { Box, Button, TextField } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './wondows/Home';
import NewTask from './wondows/NewTask';

function App() {

  return (
    <BrowserRouter>
      <div className="mainApp">
        <TitleBar title={"Lita de Tareas"} />
        <div className="contentArea">
          <div className="contentPage">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<NewTask />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
