import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Activity } from 'src/app/models/activity.model';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() activities: Activity[];
  @Output() delete = new EventEmitter<string>();

  private user: User;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  onDelete(id: string) {
    this.delete.emit(id);
  }

  canDelete(activity: Activity): boolean {
    if (this.user && activity.user.uid === this.user.uid) {
      return true;
    }
    return false;
  }

  hasLiked(activity) {
    if (
      this.user &&
      activity.likes &&
      activity.likes.filter(obj => obj.userId === this.user.uid).length > 0
    ) {
      return true;
    }
    return false;
  }
}
