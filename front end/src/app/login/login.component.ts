import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User1} from 'User/user1.model';
import { Router } from '@angular/router';
import {AuthguardService} from '../authguard.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService, private router: Router, private athgrd:AuthguardService) { }

  userData1= new User1(null,null);

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit() {
    
  }

  onSubmit(){
    this.userservice.loginUser(this.userData1).subscribe((data) => {
      if(JSON.parse(JSON.stringify(data)).sts == true){
        alert(JSON.parse(JSON.stringify(data)).msg1);
        window.location.href = 'http://localhost:4200';   
      }
      else{
        alert("Wrong password or email!!!");
      }
      
    });
    
  }

}
