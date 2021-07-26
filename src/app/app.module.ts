import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactsComponent,
    ModalPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  entryComponents: [
    ModalPaymentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
