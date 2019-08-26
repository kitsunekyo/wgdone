import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: String,
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }
});

const Task = mongoose.model('tasks', taskSchema);
export default Task;
