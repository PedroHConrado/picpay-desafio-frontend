import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalService } from '../modal';
import { DataService } from '../data.service';

export interface Card {
  card_number: string;
  cvv: number;
  expiry_date: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentId: number;
  paymentUser: string;
  paymentValue: number;
  messageHandler: boolean;
  selectedCard: string;
  success: boolean;
  status: string;
  selectedOption: string;
  alert: string;

  cards: Card[];
  constructor(private modalService: ModalService, private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    //share information of user ID and who will receive the payment  
    this.dataService.currentPaymentId.subscribe(paymentId => this.paymentId = paymentId);
    this.dataService.currentPaymentUser.subscribe(paymentUser => this.paymentUser = paymentUser);
    //share confirmation from API if the payment was successfull or not
    this.dataService.currentSuccess.subscribe(success => this.success = success);
    this.cards = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18'
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20'
      },
    ];
    this.selectedOption = this.cards[0].card_number;
  }

  confirmPayment($event: any, selectedCard: string, paymentValue: number) {
    $event.preventDefault();
    if (paymentValue==null) {
      alert("Ops! \n\nParece que você esqueceu de inserir o valor do pagamento");
    } else {
      let index = this.cards.findIndex(x => x.card_number === selectedCard); //search index by card number
      let cvv = this.cards[index].cvv; //get cvv from card by the index
      let expiryDate = this.cards[index].expiry_date; //get expiryDate from card by index
      this.postTransaction(this.paymentId, selectedCard, cvv, expiryDate, paymentValue);
      this.paymentValue = null; //clean input value 
      this.selectedOption = this.cards[0].card_number; //after confirm the payment and open the modal again, will show as selected the first card number
      this.modalService.open('confirmMessage');
      this.modalService.close('payment');
    }
  }

  postTransaction(paymentId: number, card: string, cvv: number, expiryDate: string, paymentValue: number) {
    let payments = [{
      "card_number": card,
      "cvv": cvv,
      "expiry_date": expiryDate,
      "destination_user_id": paymentId,
      "value": paymentValue
    }]
    console.log(payments);
    this.httpClient.post<any>('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', payments).subscribe(
      data => {
        this.success = data.success;
        this.status = data.status;
      }
    );

  }



}

