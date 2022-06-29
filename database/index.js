const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/test')
.then(() => {
  // console.log("Conectado")
}).catch((error) => {
  // console.log("ERROR: ", error)
})

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  created: Date,
  isFinish: Boolean,
  previus: Object
});

const Task = mongoose.model('Task', taskSchema);

const task1 = new Task({
  title: "tarea 1",
  description: "Esta tarea es nueva",
  created: new Date(),
  isFinish: false
})

// console.log(task1)

async function save() {
  try {
    const result = await task1.save()
    // console.log("Tarea guardada: ", result)
  } catch (error) {
    // console.log("ERROR: ", error)
  }
}

save();

const findTasks = () => {
  return new Promise((resolve, reject) => {
    let tasks = Task.find()
    resolve(tasks)
  })
};

module.exports = {
  findTasks
}