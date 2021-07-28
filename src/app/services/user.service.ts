import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'http://localhost:3333/users'
  cardsUrl = 'http://localhost:3333/cards'


  constructor(
    private http: HttpClient
  ) { }

  readUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  readCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl)
  }

  readById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
  }

}

