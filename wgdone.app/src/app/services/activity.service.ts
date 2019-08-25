import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities = [];

  index(): Observable<any> {
    return of(this.activities);
  }

  add(activity: Activity) {
    this.activities.push(activity);
  }
}
