import { Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import TaskModel from "../../models/TaskModel";
import './Task.css'
const ipcRenderer = window.require("electron").ipcRenderer

interface TaskParams {
  task: TaskModel,
  index: number
}

// function Task(props: TaskParams) {
//   const task = props.task

// function Task(props: TaskParams) {
//   const { task } = props

function Task({ task, index }: TaskParams) {
  const [enter, setEnter] = useState(false)

  let tasksList: any[] = []

  function checkTask(numberTask: number) {
    tasksList[numberTask].isFinished = !tasksList[numberTask].isFinished
    // renderTasks()
  }

  function deleteTask() {
    ipcRenderer.send("delete-task", task._id)
  }

  useEffect(() => {
    setEnter(true)

    return () => {
      setEnter(false)
    }
  }, [])

  
  return (
      <li id={"task" + index} className="task">
        <input
          className="checkbox"
          onClick={e => checkTask(index)}
          type="checkbox"
          name=""
          id=""
          checked={task.isFinished}
        />
        <div className="text">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <img
          alt="delete"
          src="/icons/delete.png"
          width="32px"
          height="32px"
          onClick={e => deleteTask()}
        />
      </li>
  )
}

export default Task;