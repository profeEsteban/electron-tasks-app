import { List, ListItem } from "@mui/material";
import { useState } from "react";
import Task from "../models/Task";
const { ipcRenderer } = window.require("electron")

function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([])
  ipcRenderer.send("get-all-tasks")
  ipcRenderer.on("tasks", (event: any, result: {
    error?: string,
    tasks: Task[]
  }) => {
    console.log("RECIVIENDO LAS TAREAS: ", result);
    if (result.error) alert(result.error)
    else {
      console.log(result.tasks);
      setTasks(result.tasks)
    }
  })


  return (
    <List>
      {tasks.map(task => <ListItem button>
        {task.title}
      </ListItem>)}
    </List>
  )
}

export default TasksList;