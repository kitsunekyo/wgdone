import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[];
  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.index().subscribe(activities => {
      this.activities = activities;
    });
  }
}
