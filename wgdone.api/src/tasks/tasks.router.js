import express from 'express';
import TaskController from './tasks.controller';

const TaskRouter = express.Router();

TaskRouter.get('/', (req, res) => {
  TaskController.index().then(tasks => {
    res.json(tasks);
  });
});

TaskRouter.post('/', (req, res) => {
  TaskController.add(req.body).then(task => {
    res.json(task);
  });
});

TaskRouter.delete('/:roomId', (req, res) => {
  TaskController.delete(req.params.roomId).then(task => {
    res.json(task);
  });
});

export default TaskRouter;
