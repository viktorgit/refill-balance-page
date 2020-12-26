import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-succes-or-error-dialog',
  templateUrl: './success-or-error-dialog.component.html'
})
export class SuccesOrErrorDialog implements OnInit {
  message = '';
  constructor(
    public dialogRef: MatDialogRef<SuccesOrErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {success: boolean}) {}

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.message = this.data.success ? 'Оплата прошла успешно!' : 'Ошибка!'; 
  }

}
