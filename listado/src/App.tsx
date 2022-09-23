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
  Link,
} from "react-router-dom";
import TasksList from './pages/TasksList';
import Tasks from './layouts/Tasks';


function App() {

  return (
    <BrowserRouter>
      <div className="mainApp">
        <TitleBar />
        <Link to="/tasks">Ir a Tareas</Link>

        <div className="contentArea">
          <div id="mySidebar" className="leftMenu">

          </div>
          <div className="contentPage">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/tasks" element={<Tasks />}>
                <Route path="/tasks" element={<h1>Padre</h1>} />
                <Route path="list" element={<TasksList />} />
                <Route path="new" element={<FormTask />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
