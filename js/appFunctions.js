let listaDeTareas = []





function renderTasks() {
  let tareasHTML = document.getElementById("tareas")
  tareasHTML.innerHTML = listaDeTareas.map(tarea => toHTML(tarea));
}
function toHTML(tarea) {
  return `
    <li onclick='borrar("${tarea.title}")'>
      <h2>${tarea.title}</h2>
      <p>${tarea.description}</p>
    </li>
  `
}
function borrar(titulo) {
  listaDeTareas = listaDeTareas.filter(t => t.title != titulo)
  renderTasks()
}




ipcRenderer.send("get-tasks")
ipcRenderer.on("tasks", (e, tareas) => {
  console.log(tareas);
  listaDeTareas = tareas
  renderTasks()
})


function save() {
  let title = document.getElementById("title").value
  let description = document.getElementById("description").value
  
  let tarea = {
    title,
    description,
  }

  ipcRenderer.send("save-task", tarea)
}