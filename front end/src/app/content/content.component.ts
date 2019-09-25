import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { ApodResponse } from '../apod-response';
import{UserService} from '../user.service';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

public config:ApodResponse[];

   constructor(public nasaapi:NasaApiService, public userservice:UserService) { 
     this.showConfig();
    }

  ngOnInit() {}
    

  showConfig() {
      this.nasaapi.getConfigResponse()
      .subscribe((data) =>{
        this.config = JSON.parse(JSON.stringify(data));
        this.config.reverse();
      }); 
  }
    
}
        
    
        

    
    
    




        
