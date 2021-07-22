import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  OnInit,
  OnDestroy,
  EventEmitter,
} from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { PaymentService } from "../../services/Payment/payment.service";

@Component({
  selector: "app-payment-modal",
  templateUrl: "payment-modal.component.html",
  styleUrls: ["payment-modal.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentModalComponent implements OnInit, OnDestroy {
  @Input() userData: any;
  @Output() closeModal = new EventEmitter();
  @Output() openStatusModal = new EventEmitter<any>();
  paymentValue: any;
  selectedCard: any;
  loader = false;
  cards = [
    // valid card
    {
      card_number: "1111111111111111",
      cvv: 789,
      expiry_date: "01/18",
    },
    // invalid card
    {
      card_number: "4111111111111234",
      cvv: 123,
      expiry_date: "01/20",
    },
  ];

  constructor(
    private toastr: ToastrService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  doPayment() {
    if (!this.paymentValue || !this.selectedCard) {
      return this.toastr.warning("Por favor, preencha todos os campos!");
    }

    this.loader = true;

    const body = {
      card_number: this.selectedCard.card_number,
      cvv: this.selectedCard.cvv,
      expiry_date: this.selectedCard.expiry_date,
      destination_user_id: this.userData.id,
      value: this.paymentValue,
    };

    this.paymentService.doTransaction(body).subscribe((e: any) => {
      if (e.status == "Aprovada") {
        this.closeModal.emit();
        this.openStatusModal.emit(true);
        this.loader = false;
      } else {
        this.closeModal.emit();
        this.openStatusModal.emit(false);
        this.loader = false;
      }
    });
  }

  close() {
    this.closeModal.emit();
  }
}
