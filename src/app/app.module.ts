import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxCurrencyModule } from "ngx-currency";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/UserList/user-list.component";
import { PaymentModalComponent } from "./components/PaymentModal/payment-modal.component";
import { StatusModalComponent } from "./components/StatusModal/status-modal.component";
import { LoaderComponent } from "./components/Loader/loader.component";
import { LastCardNumbers } from "./shared/pipes/CardNumbersPipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    PaymentModalComponent,
    StatusModalComponent,
    LastCardNumbers,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
