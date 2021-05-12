import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public token: string;

  constructor(private router: Router) {}

  canActivate() {
    const token = sessionStorage.getItem('token');

    if (token) {

    const role =  sessionStorage.getItem('role')

    if ( role === 'ROLE_ADMIN'){

      return true


    }else{

      sessionStorage.clear()
      this.router.navigate(['login']);
      return false;
    }


    } else {
      sessionStorage.clear()
      this.router.navigate(['login']);
      return false;
    }
  }
}
