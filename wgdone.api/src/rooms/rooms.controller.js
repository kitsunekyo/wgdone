import Room from './../mongodb/room.model';
import Task from './../mongodb/task.model';

const RoomController = {
  index() {
    return new Promise((resolve, reject) => {
      Room.find().then(
        rooms => {
          resolve(rooms);
        },
        e => {
          reject(e);
        }
      );
    });
  },
  add(roomPayload) {
    return new Promise((resolve, reject) => {
      const room = new Room(roomPayload);
      room.save((e, room) => {
        if (e) reject(e);
        resolve(room);
      });
    });
  },

  addTask(roomId, taskPayload) {
    return new Promise((resolve, reject) => {
      const task = new Task({ ...taskPayload, room: roomId });
      task.save((e, task) => {
        if (e) reject(e);
        resolve(task);
      });
    });
  },

  delete(roomId) {
    return new Promise((resolve, reject) => {
      Room.deleteOne({ _id: roomId }, error => {
        if (error) reject(error);
        resolve();
      });
    });
  }
};
export default RoomController;
