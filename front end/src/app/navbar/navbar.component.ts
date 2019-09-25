import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {AuthguardService} from '../authguard.service';
import {AdminAuthGuardService} from '../AdminauthGuard.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag;
  adminFlag;
  user;

  constructor(private userservice:UserService, public admin:AdminAuthGuardService) { 
    if(this.userservice.currentUserValue()){
      this.isAdmin(this.getEmail());  
    }
  }

  ngOnInit() {}

  Logout(){
    this.userservice.logout();
  }

  getEmail(){
    this.user = this.userservice.currentUserValue();
    this.user = JSON.parse(this.user);
    return this.user.email;
  }

  isAdmin(Email){
    this.userservice.checkAdmin(Email).subscribe((data)=>{
      if(JSON.parse(JSON.stringify(data)).sts == true){
        this.admin.nav =true;
        this.adminFlag= true;
      }else{
      this.flag= true;
      }
    }); 
  }
} 
  



  

