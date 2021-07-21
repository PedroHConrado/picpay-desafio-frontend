import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss', '../payment.component.scss']
})
export class ConfirmMessageComponent implements OnInit {
  success:boolean;
  constructor(private dataService:DataService) { }

  /**Get information from the API to see if the transaction was successful or not.
   * If the transaction was sucessfull, it will display the confirmation message
   * If the transaction was not succesfull, it will display the error message. 
   * */
  ngOnInit() {
    this.dataService.currentSuccess.subscribe(success => this.success = success);
  }
}
