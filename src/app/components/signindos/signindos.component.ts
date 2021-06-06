import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signindos',
  templateUrl: './signindos.component.html',
  styleUrls: ['./signindos.component.css']
})
export class SignindosComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private router: Router
    // private location: Location
  ) { }

  ngOnInit() {
  }

  // signIndos() {
  //   this.authService.signInAdmin(this.admin)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         localStorage.setItem('token', res.token);
  //         this.router.navigate(['/usuario']);
  //       },
  //       err => console.log(err)
  //     )
  // }

  goBack(): void {
    this.router.navigate(['/usuario']);
  }

}

