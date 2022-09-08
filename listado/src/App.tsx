import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './scroll.css';
import TitleBar from './components/TitleBar';
import FormTask from './components/FormTask';
import Task from './components/Task/Task';
import TaskModel from './models/TaskModel';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TasksList from './pages/TasksList';


function App() {

  return (
    <div className="mainApp">
      <TitleBar />

      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/lista" element={<TasksList />} />
            </Routes>
          </BrowserRouter >
        </div>
      </div>
    </div>
  );
}

export default App;
