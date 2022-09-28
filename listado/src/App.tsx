import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Winows/Home';
import TileBar from './Components/TileBar';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppBar from './Components/AppBar';

function App() {
  return (
    <BrowserRouter>
      <TileBar />
      <AppBar />

      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
