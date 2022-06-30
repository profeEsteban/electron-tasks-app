
var tasksList = ["fruta", "verduras", "carnes", "celulares", "papeles", "bolsas"].map((element, index) => {
  let tarea = {
    title: "Compra " + (index + 1),
    description: "Ir al mercado por " + element,
    date: new Date(),
    isFinished: index % 3 == 0
  }
  return tarea
})

const newTaskForm = document.getElementById("newTaskForm");
const tasksListUI = document.getElementById("tasksListUI");

newTaskForm.addEventListener("submit", e => {
  e.preventDefault();
  // console.log(e)

  let title = document.getElementById("title");
  let description = document.getElementById("description");

  let newTask = {
    title: title.value,
    description: description.value,
    date: new Date(),
    isFinished: false
  }

  tasksList.push(newTask);
  // console.log(tasksList);

  renderTasks();
})


function taskToHTML(task, index) {
  return `
    <li id="task${index}" class="task">
      <input class="checkbox" onClick="checkTask(${index})" type="checkbox" name="" id="" ${task.isFinished ? "checked" : ""} >
      <div class="text">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </div>
      <img src="icons/delete.png" width="32px" heigh="32px" onClick="deleteTask(${index})" />
    </li>
  `
}

function checkTask(numberTask) {
  tasksList[numberTask].isFinished = !tasksList[numberTask].isFinished
  renderTasks()
}

function deleteTask(numberTask) {
  tasksList = tasksList.filter((e, index) => index != numberTask)
  renderTasks()
}

function renderTasks() {
  tasksListUI.innerHTML = tasksList.map((task, index) => {
    return taskToHTML(task, index);
  })
}

renderTasks()