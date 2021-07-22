import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-status-modal",
  templateUrl: "status-modal.component.html",
  styleUrls: ["status-modal.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class StatusModalComponent {
  @Input() status: any;
}
