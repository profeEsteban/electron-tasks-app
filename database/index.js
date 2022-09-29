const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jueves')
  .then((result) => {
    console.log("CONECTADO A MONGO");
  }).catch((error) => {
    console.log("ERROR AL CONECTAR: ", error);
  })


const taskSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  date: Date,
  isFinished: Boolean,
}, { _id: true });
// });



const Task = mongoose.model('Task', taskSchema);

const exampleTasks = [0, 0, 0, 0, 0, 0, 0, 00, 0, 0, 0, 0].map((item, index) =>
  new Task({
    _id: new mongoose.Types.ObjectId(),
    title: "Titulo " + index,
    description: "Descripción " + index,
  }))

exampleTasks.forEach(t => t.save())

module.exports = {
  TasksFind: () => Task.find(),
  TaskDelete: (_id) => Task.collection.deleteOne({ _id: new mongoose.Types.ObjectId(_id) })
}
