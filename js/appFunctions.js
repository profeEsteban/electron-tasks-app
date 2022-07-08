

ipcRenderer.send("get-tasks")
ipcRenderer.on("tasks", (e, args) => {
  console.log(args);
})