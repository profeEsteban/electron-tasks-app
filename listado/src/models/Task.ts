export default interface Task {
  title: String,
  description: String,
  date: Date,
  isFinished: Boolean,
  previus: Object | null
}