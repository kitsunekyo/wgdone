import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private db: AngularFirestore) {}

  list(): Observable<Activity[]> {
    return this.db
      .collection<Activity>('activities', ref => ref.orderBy('timestamp', 'desc'))
      .valueChanges({ idField: 'id' });
  }

  get(activityId: string): Observable<any> {
    return this.db.doc('activities/' + activityId).get();
  }

  add(task: Activity) {
    return this.db.collection('activities').add(task);
  }

  update(task: Activity): Promise<void> {
    delete task.id;
    return this.db.doc('activities/' + task.id).update(task);
  }

  delete(activityId: string): Promise<void> {
    return this.db.doc('activities/' + activityId).delete();
  }
}
