import express from 'express';
import RoomController from './room.controller';

const RoomRouter = express.Router();

RoomRouter.get('/', RoomController.index);
RoomRouter.post('/', RoomController.add);
RoomRouter.delete('/:roomId', RoomController.delete);
RoomRouter.get('/:roomId', RoomController.get);
RoomRouter.get('/:roomId/tasks', RoomController.getTasks);
RoomRouter.post('/:roomId/tasks', RoomController.addTask);

export default RoomRouter;
