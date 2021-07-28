import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-result-success',
  templateUrl: './modal-result-success.component.html',
  styleUrls: ['./modal-result-success.component.scss']
})
export class ModalResultSuccessComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalResultSuccessComponent>,
  ) { }

  ngOnInit() {
  }

  cancel2(): void {
    this.dialogRef.close();
  }

}



