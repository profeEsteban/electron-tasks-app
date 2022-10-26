const TaskModel = require("./TaskModel");

function SaveTask(task) {
  return new Promise((resolve, reject) => {
    let task1 = new TaskModel({
      title: task.title,
      description: task.description,
      created: new Date(),
      isFinish: false
    })

    task1.save().then(r => {
      console.log(task1.title + " saved.");
      resolve(task1)
    }).catch(error => {
      reject(error)
    })
  })
}

module.exports = {
  FindTasks: () => Task.find(),
  SaveTask: (task) => SaveTask(task)
}