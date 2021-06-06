import { Component, OnInit } from "@angular/core";

import { UserService } from "../../services/User.service";
import { NgForm } from "@angular/forms";
import { User } from "../../models/User";
import { Router } from '@angular/router';

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
  providers: [UserService],
})
export class UsuarioComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  addUser(form?: NgForm) {
    if (form.value._id) {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getUsers();
      });
    } else {
      this.userService.postUser(form.value).subscribe((res) => {
        this.getUsers();
        this.resetForm(form);
      });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.users = res;
      console.log(this.userService.users)
    });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.getUsers();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}