import { Component, OnInit } from '@angular/core';
import {FeedBack} from '../feedback.model';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public userservice:UserService, private router: Router) { }

  ngOnInit() {
  }

  feedBack = new FeedBack (null,null,null);

  Submit(){
  this.userservice.commentUpload(this.feedBack).subscribe((data)=>{
  if(JSON.parse(JSON.stringify(data)).sts == true){
    alert("Thank you for contacting us!!");
    this.router.navigateByUrl('/');
  }
  });
  }

}
