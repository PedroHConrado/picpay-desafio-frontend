import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmMessageComponent } from './payment/confirm-message/confirm-message.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ModalComponent,
    PaymentComponent,
    ConfirmMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  providers: [UsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
