import { Activity } from './activity.model';

export interface Task {
  id?: string;
  name: string;
  meta?: {
    type: 'select' | 'input';
    select_label: string;
    select_options: string[];
  };
  latestActivity?: Activity;
}
