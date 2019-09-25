import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { UserResp } from 'User/userResp.model';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.css']
})
export class BloggersComponent implements OnInit {

  public user:UserResp[];
  i;

  constructor(public userservice:UserService) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
  this.userservice.fetchUsers().subscribe((data)=>{
  this.user = JSON.parse(JSON.stringify(data));
  this.user.reverse();
  this.user.pop();
  
  console.log(this.user);
  console.log(this.user[0].firstName);
 

});

}

DeleteUser(id){
  this.userservice.DeleteUser(id).subscribe((data)=>{
    alert(JSON.parse(JSON.stringify(data)).msg);
  });
}

}
