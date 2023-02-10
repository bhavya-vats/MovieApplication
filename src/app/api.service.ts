import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface fact{
  data:string,
  }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getWeatherDetails(){

    var response = this.http.get<fact>('https://meowfacts.herokuapp.com/?count=3');
    return response;
    
  }


}
