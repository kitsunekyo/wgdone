import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Activity } from 'src/app/models/activity.model';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() activities: Activity[];
  @Output() delete = new EventEmitter<string>();

  private user: User;

  constructor(private auth: AuthService, public dialog: MatDialog) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  onDelete(activity: Activity) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        title: 'Activity löschen',
        description: `Bist du sicher, dass du den Eintrag ${activity.task.name} löschen willst?`,
        confirmLabel: 'Activity löschen'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(activity.id);
      }
    });
  }

  canDelete(activity: Activity): boolean {
    if (this.user && activity.user.uid === this.user.uid) {
      return true;
    }
    return false;
  }
}
