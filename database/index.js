// getting-started.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/viernes')
  .then((result) => {
    console.log("\n///////////////////////////////////");
    console.log("// CONECTADO  SATISFACTORIAMENTE //");
    console.log("///////////////////////////////////");
  }).catch((error) => {
    console.log("ERROR: ", error)
  });


const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  isFinished: Boolean,
  previus: Object | null
});

const Task = mongoose.model('Task', taskSchema);

// const task1 = new Task({ 
//   title: "Tarea nueva",
//   description: "Descripion de Tarea nueva",
//   date: new Date(),
//   isFinished: false,
//   previus: null
//  });

// task1.save().then(r => {
//   console.log("ID: ", r._id);
// }).catch(e => {
//   console.log("UNSAVED: ", e);
// })

// Task.findOne({ _id: "62bf0c4e5c90ae51c593492c" }).then(result => {
//   let tarea = result;
//   tarea.previus = {
//     title: tarea.title,
//     description: tarea.description,
//     date: tarea.date,
//     previus: tarea.previus
//   };
//   tarea.title = "Tarea modificada";
//   tarea.isFinished = true;
//   // console.log(tarea);

//   tarea.save().then(r => {
//     console.log("ID: ", r._id);
//   }).catch(e => {
//     console.log("UNSAVED: ", e);
//   })
// }).catch(error => {
//   console.log("ERROR: ", error);
// })


module.exports = {
  TaskFind: () => Task.find()
}