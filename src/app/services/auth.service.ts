import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://empreciclas-backend.herokuapp.com/api';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signUpAdmin(admin) {
    return this.http.post<any>(this.URL + '/signupdos', admin);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  signInAdmin(admin) {
    return this.http.post<any>(this.URL + '/signindos', admin);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
