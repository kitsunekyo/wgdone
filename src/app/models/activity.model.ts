import { Task } from './tasks.model';
import { User } from './user.model';

export interface Activity {
  id?: string;
  task: Task;
  meta?: string[];
  timestamp: Date;
  user: User;
}
