import { Paper } from "@mui/material";
import Task from "../Models/Task";

interface TaskItemProps { task: Task}

// function TaskItem(propiedades: TaskItemProps) {
//   const task = propiedades.task

function TaskItem({ task }: TaskItemProps) {
  return (
    <Paper sx={{ margin: 2, padding: 2 }}>
      <h1>{task.title}</h1>
      <h3>{task.description}</h3>
      <p>{task.created.toDateString()}</p>
    </Paper>
  )
}

export default TaskItem;