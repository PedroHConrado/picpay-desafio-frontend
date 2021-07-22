import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Users } from "../../models/Users/users";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getUsers(): Observable<Users[]> {
    return this.httpClient
      .get<Users[]>(this.url)
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
