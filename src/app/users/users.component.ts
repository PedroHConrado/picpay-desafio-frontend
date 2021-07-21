import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    private httpClient: HttpClient) {  }

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
}
