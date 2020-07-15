import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../components/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : UserService , private router : Router ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
  : Observable <boolean> | boolean 
  {
    if(this.userService.userIsAuth()) {
      return true;

    }
    this.router.navigate(['/']);
    return false;
  }
}
