import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ModalService } from '../modal';
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

  constructor(private httpClient: HttpClient, private modalService: ModalService) {  }

  ngOnInit() {
    this.getUsers();
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
    this.modalService.open("payment");
  }
}
