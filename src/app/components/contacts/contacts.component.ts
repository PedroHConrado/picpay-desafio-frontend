import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../models/user'
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  users!: User[];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

  openModalPayment(id: number): void {
    const dialogRef = this.dialog.open(ModalPaymentComponent, {
      width: '250px',
      data: { id }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('A caixa de diálogo foi fechada');
    });

    console.log(id)
  }


}
