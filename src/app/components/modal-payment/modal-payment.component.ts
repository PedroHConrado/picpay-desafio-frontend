import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
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
  card!: Card;
  cardInvalid: Card;
  cards: Card[] = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private paymentService: PaymentService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {

    this.userService.readById(data.id)
      .pipe(
        take(1)
      )
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      card: [null, [Validators.required]],
      destination_user_id: [this.data.id, [Validators.required]],
      value_payment: [null, [Validators.required, Validators.minLength(0.1), Validators.maxLength(100)]]
    });
    this.cardInvalid = this.cards[1];
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.value.card.card_number !== this.cardInvalid.card_number) {
        this.paymentService.transaction(this.form.value).subscribe((data) => {
          if (data.success) {
            this.paymentService.create(this.form.value).subscribe();
            this.cancel();
            this.openModalSuccess();
          } else {
            this.cancel();
            this.openModalFailed();
          }
        });
      } else {
        this.cancel();
        this.openModalFailed();
      }
    } else {
      return false;
    }
  }

  cancel(): void {
    this.dialogRef.close();
    this.form.reset();
  }

  openModalSuccess(): void {

    const dialogRef = this.dialog.open(ModalResultSuccessComponent, {
      width: '900px',
      height: '200px',
      panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe();

  }

  openModalFailed(): void {

    const dialogRef = this.dialog.open(ModalResultFailedComponent, {
      width: '900px',
      height: '200px',
      panelClass: 'custom-dialog-container'

    });

    dialogRef.afterClosed().subscribe();

  }

}

