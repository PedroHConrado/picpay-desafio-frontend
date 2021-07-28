import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../models/transactionPayLoad';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  transactionsUrl = 'http://localhost:3333/transactions'
  TRANSACTION = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  create(transaction: TransactionPayload): Observable<TransactionPayload> {
    return this.http.post<TransactionPayload>(this.transactionsUrl, transaction)
  }

  transaction(obj): Observable<any> {
    return this.http.post<any>(this.TRANSACTION, JSON.stringify(obj))
  }

}
