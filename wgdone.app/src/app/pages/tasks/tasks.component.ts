import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { RoomService } from 'src/app/services/room.service';
import { forkJoin } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  roomId: string;
  roomDetails: any;
  tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params.id;
      forkJoin(this.roomService.get(this.roomId), this.roomService.getTasks(this.roomId)).subscribe(
        val => {
          this.roomDetails = val[0];
          this.tasks = val[1];
        }
      );
    });
  }

  showRooms() {
    this.router.navigateByUrl('/rooms');
  }

  addActivity(taskId: string) {
    const activity = {
      room: this.roomDetails.name,
      task: this.tasks.find(obj => obj.id === taskId).name,
      user: 'alex',
      date: new Date().toDateString()
    };
    console.log('adding activity', activity);
    this.activityService.add(activity);
  }
}
