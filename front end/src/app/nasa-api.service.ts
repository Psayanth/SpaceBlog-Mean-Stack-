import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApodResponse } from './apod-response';
import { Observable } from '../../node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private http: HttpClient) { }
  
  date = new Date().toISOString().slice(0,10);
  
  nasa_url = 'https://api.nasa.gov/planetary/apod?api_key=eo9g7PCZj6Uz6Hr0jG53N1t7FYCFQsaDFC6jJIor&start_date=2019-09-15&end_date='+this.date;
  
  
  getConfigResponse(): Observable<ApodResponse[]> {
  
    return this.http.get<ApodResponse[]>(this.nasa_url);          
  
  }

  
}
  

