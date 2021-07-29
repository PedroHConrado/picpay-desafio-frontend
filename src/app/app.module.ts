import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ModalPaymentComponent } from './components/modal-payment/modal-payment.component';
import { ModalResultSuccessComponent } from './components/modal-result-success/modal-result-success.component';
import { ModalResultFailedComponent } from './components/modal-result-failed/modal-result-failed.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactsComponent,
    ModalPaymentComponent,
    ModalResultSuccessComponent,
    ModalResultFailedComponent,
    ModalResultSuccessComponent,
    ModalResultFailedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ModalPaymentComponent,
    ModalResultSuccessComponent,
    ModalResultFailedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
