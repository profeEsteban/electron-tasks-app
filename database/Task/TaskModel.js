var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TaskSchema = new Schema({
  _id: String,
  title: String,
  description: String,
  created: Date,
  isFinish: Boolean,
  previus: Object
});

module.exports = {
  TaskSchema,
  TaskModel: mongoose.model('Task', TaskSchema),
}
