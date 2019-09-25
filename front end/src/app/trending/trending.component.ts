import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {blogPost} from 'src/app/blogPost.model';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class TrendingComponent implements OnInit {

  public Blog:blogPost[];
  constructor( public userservice:UserService) {
    this.FetchAll();
   }

  ngOnInit() {
  }

  FetchAll(){
    this.userservice.readAll().subscribe((data) =>{
      this.Blog = JSON.parse(JSON.stringify(data));
      this.Blog.reverse();
    });
  }
}
