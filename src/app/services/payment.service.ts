import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TransactionPayload } from '../models/transactionPayLoad';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  transactionsUrl = environment.TRANSACTIONS_URL;
  TRANSACTION = environment.TRANSACTION;


  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(transaction: TransactionPayload): Observable<TransactionPayload> {
    return this.http.post<TransactionPayload>(this.transactionsUrl, transaction)
      .pipe(
        take(1),
        catchError((e) => this.errorHandler(e))
      );
  }

  transaction(obj): Observable<any> {
    return this.http.post<any>(this.TRANSACTION, JSON.stringify(obj))
      .pipe(
        take(1),
        catchError((e) => this.errorHandler(e))
      );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;

  }


}
