import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/activity.model';

interface ChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('.1s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('.1s ease-in', style({ opacity: 0 }))])
    ])
  ]
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];
  loading = true;

  chartData: ChartData[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.list().subscribe(activities => {
      this.activities = activities;
      this.countActivitiesPerPerson();
      this.loading = false;
    });
  }

  countActivitiesPerPerson() {
    for (const activity of this.activities) {
      const data = this.chartData.find(d => d.name === activity.user.displayName);
      if (data) {
        data.value++;
      } else {
        this.chartData.push({ name: activity.user.displayName, value: 1 });
      }
    }
  }

  onDelete(activityId: string) {
    this.activityService.delete(activityId);
  }
}
