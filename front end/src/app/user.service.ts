import { Injectable } from '@angular/core';
import {User} from 'User/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {BlogFetchResponse} from './blogfetchResponse';
import {blogPost} from 'src/app/blogPost.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  public blogdata : BlogFetchResponse[];
  flag:boolean = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>; 

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('currentUser'))));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  
  public currentUserValue(){
    return this.currentUserSubject.value;
    
  }

  

  addUser(user){
    return this.http.post('http://localhost:3001/signup',{"userData":user});
  }

  loginUser(user){
    return this.http.post('http://localhost:3001/login',{"userData1":user}).pipe(map(data => {
      var udata = JSON.parse(JSON.stringify(data));
      if (udata && udata.sts) {
      localStorage.setItem('currentUser', JSON.stringify(udata));
      this.currentUserSubject.next(udata);
      }
       
      return udata;
      }));
  }

  logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        window.location.href = 'http://localhost:4200/login';  
  }

  blogUpload(data){
      return this.http.post('http://localhost:3001/upload',{"blogData":data});
  }

  blogFetch(email){
      return this.http.post('http://localhost:3001/read',{email});
  }

  blogUpdate(id){
       this.http.get('http://localhost:3001/update/'+id).subscribe((data)=>{
        this.blogdata=JSON.parse(JSON.stringify(data));
        this.router.navigate(['/update/',this.blogdata]);
       });
  }

  ReblogUpdate(data){
      return this.http.post('http://localhost:3001/update',{"blog":data});
  }

  blogDelete(id){
      return this.http.post('http://localhost:3001/delete',{id});
  }

  readAll(){
    return this.http.get('http://localhost:3001/readall');
  }

  checkAdmin(email){
    return this.http.post('http://localhost:3001/admin',{email});
  }

  fetchUsers(){
    return this.http.get('http://localhost:3001/getusers');
  }

  DeleteUser(id){
    return this.http.post('http://localhost:3001/deleteuser',{id});
  }
  commentUpload(data){
    return this.http.post('http://localhost:3001/feedback',{"feedBack":data});

  }


}

  
  

