import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BlogFetchResponse } from '../blogfetchResponse';
import { Router } from '@angular/router';
import {blogPost} from 'src/app/blogPost.model';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  public Blog:blogPost[];
  user;
  constructor(public userservice:UserService, private router: Router) {
    this.fetchData(this.getEmail());
   }

  ngOnInit() {
  } 

  getEmail(){
   this.user = this.userservice.currentUserValue();
   this.user = JSON.parse(this.user);
   return this.user.email;
  }

  fetchData(email){
    this.userservice.blogFetch(email).subscribe((data) => {
      this.Blog = JSON.parse(JSON.stringify(data));
      this.Blog.reverse();
    });
  }

  DeletePost(id){
    alert("this will be deleted ");
    
    this.userservice.blogDelete(id).subscribe((data) => {
      alert(JSON.parse(JSON.stringify(data)).msg);
      window.location.reload();
    });
    

  }

  UpdatePost(id){
    console.log(typeof(id));
    this.userservice.blogUpdate(id);
  }

}
