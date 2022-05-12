import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  displayInvalid: boolean = false;

  constructor(private http: HttpClient, public router: Router) {
  }

  login(user: User) {
    this.displayInvalid = false;
    if (user.username == 'username' && user.password == 'password') {
      this.router.navigateByUrl("/resources");
    } else {
      this.displayInvalid = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }


}
