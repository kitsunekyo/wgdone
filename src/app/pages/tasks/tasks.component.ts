import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks.model';
import { ActivityService } from 'src/app/services/activity.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('.1s ease-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('.1s ease-in', style({ opacity: 0 }))])
    ])
  ]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    combineLatest(this.taskService.list(), this.activityService.list()).subscribe(res => {
      this.tasks = res[0].map(task => {
        return {
          ...task,
          latestActivity: res[1].find(activity => activity.task.name === task.name)
        };
      });
      this.loading = false;
    });
  }

  submitTask(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
