import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { User } from '../../models/user'
import { ModalPaymentComponent } from '../modal-payment/modal-payment.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  user!: User;
  users$: Observable<User[]>

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.users$ = this.userService.readUsers()
  }

  openModalPayment(id: number): void {

    const dialogRef = this.dialog.open(ModalPaymentComponent, {
      width: '700px',
      height: '500px',
      data: { id: id },
      panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe()

  }


}
