import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { AuthService } from 'src/app/auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Activity } from 'src/app/models/activity.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('.1s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('.1s ease-in', style({ opacity: 0 }))])
    ])
  ]
})
export class MyActivitiesComponent implements OnInit {
  public activities: Activity[];
  public loading = true;
  public chartData: { name: string; value: number }[] = [];

  constructor(private auth: AuthService, private activityService: ActivityService) {}

  ngOnInit() {
    this.auth.user$
      .pipe(
        map(user => user.uid),
        switchMap(uid => this.activityService.listForUser(uid))
      )
      .subscribe(activities => {
        this.activities = activities;
        this.chartData = this.countActivitiesPerPerson();
        this.loading = false;
      });
  }

  private countActivitiesPerPerson(): { name: string; value: number }[] {
    const collection = [];
    for (const activity of this.activities) {
      const data = collection.find(d => d.name === activity.task.name);
      if (data) {
        data.value++;
      } else {
        collection.push({ name: activity.task.name, value: 1 });
      }
    }
    collection.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));
    return collection;
  }

  onDelete(activityId: string) {
    this.activityService.delete(activityId);
  }
}
