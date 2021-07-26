import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
