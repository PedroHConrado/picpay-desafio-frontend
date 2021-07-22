import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { UserService } from "../../services/Users/users.service";
import { Users } from "../../models/Users/users";

@Component({
  selector: "app-list-users",
  templateUrl: "user-list.component.html",
  styleUrls: ["user-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {
  showModal = false;
  showStatusModal = false;
  status = false;
  loader = false;
  user = {} as Users;
  users: Users[];
  selectedUser = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  openModal(user) {
    this.showModal = true;
    this.selectedUser = user;
  }

  openStatusModal(status) {
    this.status = status;
    this.showStatusModal = true;
    setTimeout(() => {
      this.showStatusModal = false;
    }, 3000);
  }

  closeModal() {
    this.showModal = false;
  }

  getUsers() {
    this.loader = true;
    this.userService.getUsers().subscribe((users: Users[]) => {
      this.loader = false;
      this.users = users;
    });
  }
}
