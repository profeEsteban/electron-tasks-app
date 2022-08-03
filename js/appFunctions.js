// const { ipcRenderer } = require("electron");

function getTasks() {
  console.log("PIDIENDO AL MAIN LAS TAREAS");
  ipcRenderer.send("get-all-tasks")
}

ipcRenderer.on("tasks", (event, result) => {
  console.log("RECIVIENDO LAS TAREAS: ", result);
  if (result.error) alert(result.error)
  else console.log(result.tasks);
})
