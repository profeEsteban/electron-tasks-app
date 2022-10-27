const TaskModel = require("./TaskModel");

function SaveTask(task) {
  return new Promise((resolve, reject) => {
    let task1 = new TaskModel({
      _id: new mongoose.Types.ObjectId(),
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
  TaskFind: () => Task.find(),
  TaskSave: (task) => SaveTask(task),
  TaskDelete: (_id) => Task.collection.deleteOne({ _id: _id }),
}