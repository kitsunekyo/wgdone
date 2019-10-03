import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks.model';
import { Activity } from 'src/app/models/activity.model';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-submit',
  templateUrl: './task-submit.component.html',
  styleUrls: ['./task-submit.component.scss']
})
export class TaskSubmitComponent implements OnInit {
  task: Task;
  user: User;
  activities: Activity[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskService.get(params.get('id')).subscribe(task => {
        this.task = task;

        this.activityService
          .list()
          .pipe(
            map(activities => activities.filter(activity => activity.task.name === this.task.name))
          )
          .subscribe(activities => {
            this.activities = activities;
          });
      });
      this.authService.user$.subscribe(user => {
        this.user = user;
      });
    });
  }

  submit() {
    const activity: Activity = {
      task: this.task,
      rooms: [],
      timestamp: new Date(),
      user: this.user
    };
    this.activityService.add(activity).then(() => {
      console.log('activity added', { activity });
    });
  }
}
