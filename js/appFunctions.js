// const { ipcRenderer } = require("electron");

let tasksList = []

function getTasks() {
  console.log("PIDIENDO AL MAIN LAS TAREAS");
  ipcRenderer.send("get-all-tasks")
}

ipcRenderer.on("tasks", (event, result) => {
  console.log("RECIVIENDO LAS TAREAS: ", result);
  if (result.error) alert(result.error)
  else {
    console.log(result.tasks);
    tasksList = result.tasks
    renderTasks()
  }
})

function renderTasks() {
  const tasksListUI = document.getElementById("tasksListUI")
  tasksListUI.innerHTML = "";
  tasksList.forEach(task => {
    tasksListUI.innerHTML += taskToHTML(task)
  })
}

function taskToHTML(task) {
  return `<li>
    ${task.title}
  </li>`
}


function createTasks() {
  let newTask = {
    title: `Tarea ${tasksList.length + 1}`
  }
  ipcRenderer.send("create-new-task", newTask)
  // getTasks();
}
ipcRenderer.on("created-new-task", (event, result) => {
  console.log("UNA TAREA NUEVA SE CREO: ", result);

  if (result.error) alert(result.error)
  else {
    console.log(result.newTask);
    tasksList.push(result.newTask)
  }
  renderTasks()
})



getTasks();