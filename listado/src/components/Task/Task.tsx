import TaskModel from "../../models/TaskModel";
import './Task.css'

interface TaskParams {
  task: TaskModel,
  index: number
}

function Task({ task, index }: TaskParams) {
  let tasksList: any[] = []

  function checkTask(numberTask: number) {
    tasksList[numberTask].isFinished = !tasksList[numberTask].isFinished
    // renderTasks()
  }

  function deleteTask(numberTask: number) {
    // tasks = tasksList.find((e, index) => index == numberTask)
    // let idTask = tasks._id
    // console.log("BORRAR: ", idTask)
    // ipcRenderer.send("delete-task", idTask)

    // tasksList = tasksList.filter((e, index) => index != numberTask)
    // renderTasks()
  }

  return (
    <li id="task${index}" className="task">
      <input className="checkbox" onClick={e => checkTask(index)} type="checkbox" name="" id="" checked={task.isFinished} />
      <div className="text">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </div>
      <img src="icons/delete.png" width="32px" height="32px" onClick={e => deleteTask(index)} />
    </li>
  )
}

export default Task;