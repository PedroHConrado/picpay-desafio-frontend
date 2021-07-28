import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-result-failed',
  templateUrl: './modal-result-failed.component.html',
  styleUrls: ['./modal-result-failed.component.scss']
})
export class ModalResultFailedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalResultFailedComponent>,

  ) { }

  ngOnInit() {
  }

}
