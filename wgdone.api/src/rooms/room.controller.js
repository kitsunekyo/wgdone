import Room from '../mongodb/room.model';
import Task from '../mongodb/task.model';

const RoomController = {
  index(req, res) {
    Room.find().exec((err, rooms) => {
      if (err) res.status(500).send(err);
      res.send(rooms);
    });
  },

  get(req, res) {
    Room.findById(req.params.roomId).exec((err, room) => {
      if (err) res.status(500).send(err);
      res.send(room);
    });
  },

  add(req, res) {
    const room = new Room(req.body);
    room.save((err, room) => {
      if (err) res.status(500).send(err);
      res.send(room);
    });
  },

  getTasks(req, res) {
    Room.findById(req.params.roomId).exec((err, room) => {
      if (err) res.status(500).send(err);
      res.send(room.tasks);
    });
  },

  addTask(req, res) {
    Room.findById(req.params.roomId).exec((err, room) => {
      if (err) res.status(500).send(err);
      const task = new Task(req.body);
      room.tasks.push(task),
        room.save(err => {
          if (err) res.status(500).send(err);
          res.send(task);
        });
    });
  },

  delete(req, res) {
    Room.findByIdAndDelete(req.params.roomId).exec(err => {
      if (err) res.status(500).send(err);
      res.send();
    });
  }
};

export default RoomController;
