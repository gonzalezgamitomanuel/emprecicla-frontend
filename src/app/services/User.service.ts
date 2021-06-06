import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class UserService {
  selectedUser: User;
  users: User[];
  readonly URL_API = "https://empreciclas-backend.herokuapp.com/api/usr";

  constructor(private http: HttpClient) {
    console.log("construyo")
    this.selectedUser = new User();
  }

  postUser(user: User) {
    return this.http.post(this.URL_API, user);
  }

  getUsers() {
    const v = this.http.get<User[]>(this.URL_API);
    console.log(v)
    return v
  }

  putUser(user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}