import { Task } from './Task';

export interface Room {
  id: string;
  name: string;
  tasks?: Task[];
}
