import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service'


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

constructor(public userservice:UserService,  private router: Router ) {}

user;

canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean{
  const currentUser = this.userservice.currentUserValue();
  if(currentUser){
    return true;
  }
  else{
    this.router.navigateByUrl('/****forbidden');
    return false;
  }
}
}

