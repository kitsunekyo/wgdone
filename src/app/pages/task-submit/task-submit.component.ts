import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

import { ActivityService } from 'src/app/services/activity.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks.model';
import { Activity } from 'src/app/models/activity.model';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-task-submit',
  templateUrl: './task-submit.component.html',
  styleUrls: ['./task-submit.component.scss']
})
export class TaskSubmitComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  task: Task;
  user: User;
  activities: Activity[];
  metaSelections: string[] = [];
  posting$ = new BehaviorSubject<boolean>(false);

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
            map(activities =>
              activities.filter(
                activity => activity.task.name === this.task.name
              )
            )
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  submit() {
    this.posting$.next(true);
    const activity: Activity = {
      task: this.task,
      meta: this.metaSelections,
      timestamp: new Date(),
      user: this.user
    };
    this.activityService.add(activity).then(
      () => {
        this.posting$.next(false);
        this.router.navigate(['/activities']);
      },
      e => {
        this.posting$.next(false);
      }
    );
  }

  onDeleteActivity(activityId: string) {
    this.activityService.delete(activityId);
  }
}
