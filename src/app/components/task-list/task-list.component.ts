import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  select(id: string) {
    this.selected.emit(id);
  }
}
