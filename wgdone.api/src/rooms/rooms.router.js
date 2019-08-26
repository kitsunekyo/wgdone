import express from 'express';
import RoomController from './rooms.controller';

const RoomRouter = express.Router();

RoomRouter.get('/', (req, res) => {
  RoomController.index().then(rooms => {
    res.json(rooms);
  });
});

RoomRouter.post('/', (req, res) => {
  RoomController.add(req.body).then(room => {
    res.json(room);
  });
});

RoomRouter.delete('/:roomId', (req, res) => {
  RoomController.delete(req.params.roomId).then(room => {
    res.json(room);
  });
});

RoomRouter.post('/:roomId/task', (req, res) => {
  RoomController.addTask(req.params.roomId, req.body).then(task => {
    res.json(task);
  });
});

export default RoomRouter;
