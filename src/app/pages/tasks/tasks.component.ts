import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks$ = this.taskService.list();
  }

  submitTask(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
