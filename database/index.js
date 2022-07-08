const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/miercoles')
  .then(() => {
    console.log("Conectado")
    console.log("////////////////////////////")
  }).catch((error) => {
    console.log("ERROR: ", error)
  })

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  created: Date,
  isFinish: Boolean,
  previus: Object
});

const Task = mongoose.model('Task', taskSchema);

let task1 = new Task({
  title: "tarea 1",
  description: "Esta tarea es nueva",
  created: new Date(),
  isFinish: false
})

task1.save().then(r => {
  console.log(task1.title + " saved.");
})

module.exports = {
  findTasks: () => Task.find()
}