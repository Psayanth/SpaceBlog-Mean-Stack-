import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {blogPost} from 'src/app/blogPost.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public Blog:blogPost[];

  constructor(public userservice:UserService,private router : Router) { 
    this.FetchAll();
  }

  ngOnInit() {
  }
  
FetchAll(){
this.userservice.readAll().subscribe((data)=>{
  this.Blog = JSON.parse(JSON.stringify(data));
  this.Blog.reverse();
});
}

DeletePost(id){
  this.userservice.blogDelete(id).subscribe((data)=>{
    alert(JSON.parse(JSON.stringify(data)).msg);
    this.router.navigateByUrl('/posts');
  });
}

}
