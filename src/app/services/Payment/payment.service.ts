import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Payment } from "../../models/Payment/payment";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  url = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  doTransaction(payment: Payment): Observable<Payment> {
    return this.httpClient
      .post<Payment>(this.url, payment, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      this.toastr.error(error.error.message);
      errorMessage = error.error.message;
    } else {
      this.toastr.error(error.message);
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
