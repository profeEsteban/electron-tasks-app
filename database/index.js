const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jueves')
  .then((result) => {
    console.log("CONECTADO A MONGO");
  }).catch((error) => {
    console.log("ERROR AL CONECTAR: ", error);
  })




const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  isFinished: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

let tarea1 = new Task({
  title: "Tarea s",
  description: "Descripcion de la tarea 1",
  date: new Date(),
  isFinished: false
});

tarea1.save().then(result => {
  console.log("SAVED ", result);
}).catch(error => {
  console.log("ERROR ", error);
})


module.exports = {
  TasksFind: () => Task.find()
}

/*


let testPromise = new Promise((resolve, reject) => {
  let random = Math.random() * 5
  if(random < 4){
    resolve(random)
  } else {
    reject(random)
  }
})

function prueba() {
  console.log("antes");
  testPromise.then((resultado) => {
    console.log("promesa resuelta");
    console.log(resultado)
  }).catch((error) => {
    console.log("promesa error");
    console.log(error)
  })
  console.log("despues");
}

prueba();

*/