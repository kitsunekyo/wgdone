import Task from './../mongodb/task.model';

const TaskController = {
  index() {
    return new Promise((resolve, reject) => {
      Task.find().then(
        tasks => {
          resolve(rooms);
        },
        e => {
          reject(e);
        }
      );
    });
  },
  add(taskPayload) {
    return new Promise((resolve, reject) => {
      const task = new Task(taskPayload);
      task.save((e, task) => {
        if (e) reject(e);
        resolve(task);
      });
    });
  },

  delete(roomId) {
    return new Promise((resolve, reject) => {
      Task.deleteOne({ _id: roomId }, error => {
        if (error) reject(error);
        resolve();
      });
    });
  }
};
export default TaskController;
