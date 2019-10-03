import { Component, OnInit, Input, Output } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() activities: Activity[];

  constructor() {}

  ngOnInit() {}
}
