export interface Task {
  id?: string;
  name: string;
  meta?: {
    select_label: string;
    select_options: string[];
  };
}
