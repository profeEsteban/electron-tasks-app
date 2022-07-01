// const { ipcRenderer } = require("electron");

function getTasks() {
  console.log("PIDIENDO AL MAIN LAS TAREAS");
  ipcRenderer.send("get-all-tasks")
}

ipcRenderer.on("tasks", (event, tasks) => {
  console.log("RECIVIENDO LAS TAREAS");
  console.log(tasks);
} )
