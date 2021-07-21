import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ModalService } from '../modal';
import { DataService } from '../data.service';
export interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  paymentId:number;
  paymentUser: string;
  users: User[];

  constructor(
    private httpClient: HttpClient, private modalService: ModalService, private dataService: DataService) {  }

  ngOnInit() {
    this.getUsers();
    this.dataService.currentPaymentId.subscribe(paymentId => this.paymentId = paymentId); //share ID from the user that will receive the payment
    this.dataService.currentPaymentUser.subscribe(paymentUser => this.paymentUser = paymentUser); //share the name of the user that will receive the payment
  }

  //get users from API
  getUsers() {
    this.httpClient.get<any>('https://www.mocky.io/v2/5d531c4f2e0000620081ddce').subscribe(
      response => {
        this.users = response;
      }
    );
  }

  //open the modal with the id "payment". This modal will load content from payment component
  insertPaymentInfo($event: any, id: number) {
    $event.preventDefault();
    this.paymentId=id;
    this.getPaymentReceiver(id); //executes function that will search by id the user name
    this.modalService.open("payment");
  }

  //search by id the name of the user selected 
  getPaymentReceiver(id: number) {
    let index = this.users.findIndex(x => x.id === id); //search on the object the index that appears the user id
    let name = this.users[index].name; //input on a variable the name of the selected user
    this.dataService.changePaymentId(this.paymentId,name); //share the user selected id and name with other components
  }

}
