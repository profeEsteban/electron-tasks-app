const mongodb = require('mongodb');
const mongoose = require('mongoose');

// const obtenerRandom = () => new Promise((accionPositiva, accionNegativa) => {
//   let random = Math.random() * 5;
//   if(random < 3) accionPositiva(random)
//   else accionNegativa(random)
// })

// obtenerRandom().then(result => {
//   console.log("genial!! random: ", result)
// }).catch(error => {
//   console.log("ERRRORRRRRR!! random: ", error)
// })

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

function saveTask(task) {
  return new Promise((resolve, reject) => {
    let task1 = new Task({
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
  findTasks: () => Task.find(),
  saveTask: (task) => saveTask(task)
}