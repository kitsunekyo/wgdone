import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/activity.model';

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

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.list().subscribe(activities => {
      this.activities = activities;
      this.loading = false;
    });
  }

  onDelete(activityId: string) {
    this.activityService.delete(activityId);
  }
}
