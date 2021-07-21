import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalService } from '../modal';

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
  selectedOption: string;

  cards: Card[];
  constructor(private modalService: ModalService, private httpClient: HttpClient) { }

  ngOnInit() {

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
      let index = this.cards.findIndex(x => x.card_number === selectedCard); //search index by card number
      let cvv = this.cards[index].cvv; //get cvv from card by the index
      let expiryDate = this.cards[index].expiry_date; //get expiryDate from card by index
      this.selectedOption = this.cards[0].card_number; //after confirm the payment and open the modal again, will show as selected the first card number
      this.modalService.close('payment');
  }



}

