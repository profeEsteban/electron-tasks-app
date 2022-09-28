import { Paper } from "@mui/material"
import { useEffect, useState } from "react"
import TaskItem from "../Components/TaskItem"
import Task from "../Models/Task"
const ipcRenderer = window.require('electron').ipcRenderer

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    ipcRenderer.send("get-tasks")
  }, [])
  ipcRenderer.on("tasks", (e: any, tareas: Task[]) => {
    console.log(tareas);
    setTasks(tareas)
  })

  return (
    <div>
      <h1>Tareas</h1>

      {tasks.map(task => <TaskItem task={task} />)}
    </div>
  )

}

export default Tasks