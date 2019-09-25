import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from 'User/user.model';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userservice:UserService, private router: Router) { }


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userData= new User(null,null,null,null,null);

  ngOnInit() {
  }
  onSubmit(){
  this.userservice.addUser(this.userData).subscribe((data) => {
    if(JSON.parse(JSON.stringify(data)).sts == true){
      alert("Welcome to SpaceBlog!!!!!");
      this.router.navigateByUrl('/login');
    }
    
    else{
      alert("Email already exists!!!");
    }
    
  });
  
}
}
