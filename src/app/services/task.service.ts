import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../models/tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private db: AngularFirestore) {}

  list(): Observable<Task[]> {
    return this.db
      .collection<Task>('tasks', ref => ref.orderBy('name', 'asc'))
      .valueChanges({ idField: 'id' });
  }

  get(taskId: string): Observable<Task> {
    return this.db
      .collection('tasks')
      .doc<Task>(taskId)
      .valueChanges();
  }

  add(task: Task) {
    return this.db.collection('tasks').add(task);
  }

  update(task: Task): Promise<void> {
    delete task.id;
    return this.db.doc<Task>('tasks/' + task.id).update(task);
  }

  delete(taskId: string): Promise<void> {
    return this.db.doc<Task>('tasks/' + taskId).delete();
  }
}
