import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button, Collapse, Paper, TextField } from "@mui/material"
import FormTask from '../components/FormTask';
import Task from '../components/Task/Task';
import TitleBar from '../components/TitleBar';
import TaskModel from '../models/TaskModel';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { TransitionGroup } from 'react-transition-group';

const ipcRenderer = window.require("electron").ipcRenderer


function TasksList() {
  const navigate = useNavigate()
  const [tasksList, setTasksList] = useState<TaskModel[]>([])

  useEffect(() => {
    ipcRenderer.send("getTasks")
  }, [])

  ipcRenderer.on("tasks", (e: any, tasks: TaskModel[]) => {
    console.log(tasks)
    setTasksList(tasks)
  })
  ipcRenderer.on("deleted-task", (e: any, taskId: string) => {
    setTasksList(prev => prev.filter(t => t._id != taskId))
  })


  // function create(title: string) {
  //   return {
  //     _id: "saasdasd",
  //     title,
  //     description: "string",
  //     date: new Date(),
  //     isFinished: false,
  //   }
  // }
  // let tasksList: TaskModel[] = ["comer", "dormir", "correr", "volar"].map(e => create(e));

  return (
    <div>
      {/* //prolijito */}
      <h3 onClick={e => navigate("/")}>Cerrar Sesion</h3>
      <Link to="/"><Button variant="contained" color="error">Cerrar Sesion</Button></Link>

      <h1>Lista de tareas</h1>
      <ul>
        <TransitionGroup>
          {tasksList.map((item, index) =>
            <Collapse key={item._id}>
              <Task task={item} index={index} />
            </Collapse>
          )}
        </TransitionGroup>
      </ul>
    </div>
  );

}

export default TasksList;
