import mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
  name: String
});

const Task = mongoose.model('tasks', taskSchema);
export default Task;
