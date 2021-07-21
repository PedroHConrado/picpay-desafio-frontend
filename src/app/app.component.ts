import { Component } from '@angular/core';

import { ModalService } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio Picpay Front-end';
  paymentId: number;

  constructor(private modalService: ModalService) { }
  ngOnInit() { 
    
   }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
