import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service'


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

constructor(public userservice:UserService,  private router: Router ) { 
  if(this.nav == true){
    this.x =true;
  }  
  else if(this.userservice.currentUserValue()){
        this.isAdmin(this.getEmail()); 
  }else{
    this.x = false;
  }
      
}

nav;
user;
x;
canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean{
    
  if(this.x){
    return true;
  }
  else{
    this.router.navigateByUrl('/***forbiddden');
    return false;
  }
  
}

getEmail(){
  this.user = this.userservice.currentUserValue();
  this.user = JSON.parse(this.user);
  return this.user.email;
}

isAdmin(Email){
    var y:boolean;
    this.userservice.checkAdmin(Email).subscribe((data)=>{
      if(JSON.parse(JSON.stringify(data)).sts == true){
           this.x= true;
      }else{
           this.x= false;
      }
    });
}
}