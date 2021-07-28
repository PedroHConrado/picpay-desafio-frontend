import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { User } from 'src/app/models/user';
import { PaymentService } from 'src/app/services/payment.service';
import { UserService } from 'src/app/services/user.service';
import { ModalResultFailedComponent } from '../modal-result-failed/modal-result-failed.component';
import { ModalResultSuccessComponent } from '../modal-result-success/modal-result-success.component';

@Component({
  selector: 'app-modal-payment',
  templateUrl: './modal-payment.component.html',
  styleUrls: ['./modal-payment.component.scss']
})
export class ModalPaymentComponent implements OnInit {

  form!: FormGroup;

  user!: User;
  cards!: Card[]
  card!: Card


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private paymentService: PaymentService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.userService.readById(data.id).subscribe(user => {
      this.user = user
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      card: [null, [Validators.required]],
      destination_user_id: [this.data.id, [Validators.required]],
      value_payment: [null, [Validators.required, Validators.minLength(0.1), Validators.maxLength(20000)]]
    })

    this.userService.readCards().subscribe(cards => {
      this.cards = cards
    })
  }

  onSubmit() {
    console.log(this.form.value)

    this.paymentService.transaction(this.form.value).subscribe((data) => {
      if (data.success) {
        this.paymentService.create(this.form.value).subscribe()
        console.log(data)
        this.cancel()
        this.openModalSuccess()
      } else {
        this.openModalFailed()
      }
    })

  }

  cancel(): void {
    this.dialogRef.close();
    this.form.reset()
  }

  openModalSuccess(): void {

    const dialogRef = this.dialog.open(ModalResultSuccessComponent, {
      width: '900px',
      height: '200px',
      panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe()

  }

  openModalFailed(): void {

    const dialogRef = this.dialog.open(ModalResultFailedComponent, {
      width: '900px',
      height: '200px',
      panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe()

  }

}

