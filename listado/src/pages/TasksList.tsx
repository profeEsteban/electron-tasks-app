import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, Paper, TextField } from "@mui/material"
import FormTask from '../components/FormTask';
import Task from '../components/Task/Task';
import TitleBar from '../components/TitleBar';
import TaskModel from '../models/TaskModel';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function TasksList() {
  const navigate = useNavigate()

  function create(title: string) {

    return {
      _id: "saasdasd",
      title,
      description: "string",
      date: new Date(),
      isFinished: false,
    }
  }
  let tasksList: TaskModel[] = ["comer", "dormir", "correr", "volar"].map(e => create(e));

  return (
    <div>
      {/* //prolijito */}
      <h3 onClick={e => navigate("/")}>Cerrar Sesion</h3>
      <Link to="/"><Button variant="contained" color="error">Cerrar Sesion</Button></Link>

      <FormTask />

      <div>
        <h1>Lista de tareas</h1>
        <ul>
          {tasksList.map((item, index) => <Task task={item} index={index} />)}
        </ul>
      </div>
    </div>
  );

}

export default TasksList;
