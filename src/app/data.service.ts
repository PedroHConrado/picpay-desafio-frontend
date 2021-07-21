import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private paymentIdSource = new BehaviorSubject<number>(1234);
  currentPaymentId = this.paymentIdSource.asObservable();

  private paymentUserSource =new BehaviorSubject<string>("User Name");
  currentPaymentUser = this.paymentUserSource.asObservable();

  private successSource = new BehaviorSubject<boolean>(true);
  currentSuccess = this.successSource.asObservable();

  constructor() { }

  changePaymentId(paymentId:number, paymentUser:string){
    this.paymentIdSource.next(paymentId);
    this.paymentUserSource.next(paymentUser);
  }

  changeMessage(success:boolean){
    this.successSource.next(success);
  }
}
