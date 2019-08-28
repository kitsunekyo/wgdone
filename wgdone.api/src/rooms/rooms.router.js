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

RoomRouter.get('/:roomId/tasks', async (req, res) => {
  const tasks = await RoomController.getTasks(req.params.roomId);
  res.json(tasks);
});

RoomRouter.post('/:roomId/tasks', async (req, res) => {
  const task = await RoomController.addTask(req.params.roomId, req.body);
  res.json(task);
});

export default RoomRouter;
