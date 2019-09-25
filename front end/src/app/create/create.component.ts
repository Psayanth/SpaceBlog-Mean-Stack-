import { Component, OnInit } from '@angular/core';
import {blogPost} from 'src/app/blogPost.model';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  date = new Date().toISOString().slice(0,10);

  constructor(public userservice:UserService, private router: Router,public route:ActivatedRoute) { }

  user;
  getEmailandName(){
    this.user = this.userservice.currentUserValue();
    this.user = JSON.parse(this.user);
    return this.user;
  }

  blogData = new blogPost(null,null,null,this.date,this.getEmailandName().email, this.getEmailandName().name);

  flagUpdate;
  btn_name:string;


  ngOnInit() {


    this.flagUpdate=false;
    if(this.route.snapshot.params._id)
    {
     this.blogData=JSON.parse(JSON.stringify(this.route.snapshot.params));
     this.blogData.date = this.date;

     this.btn_name="Update";
     this.flagUpdate=true;

    }
    else
    {

      this.btn_name="Upload";
      this.flagUpdate=false;
    }
    


  }
  
  Submit(){
    if(this.flagUpdate==true)
    {
      this.Resubmit();
      
    }
    else{
      this.onSubmit();
    }
    this.router.navigateByUrl('/myposts/recent');
  }
  

  onSubmit(){
    this.userservice.blogUpload(this.blogData).subscribe((data) => {
      if(JSON.parse(JSON.stringify(data)).sts == true){
        alert("Successfully uploaded!!!");
        this.router.navigateByUrl('/myposts/recent');
      }
      else{
        alert("Something went wrong!!! Please try after sometime");
      }
    });
  }
  Resubmit(){
    this.userservice.ReblogUpdate(this.blogData).subscribe((data)=>{
      alert(JSON.parse(JSON.stringify(data)).msg);
      this.router.navigateByUrl('/myposts/recent');
    })
  }


}
