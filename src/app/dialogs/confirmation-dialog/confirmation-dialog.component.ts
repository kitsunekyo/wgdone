import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
