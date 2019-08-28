import mongoose from 'mongoose';
import { taskSchema } from './task.model';

const roomSchema = new mongoose.Schema({
  name: String,
  tasks: [taskSchema]
});

const Room = mongoose.model('rooms', roomSchema);
export default Room;
