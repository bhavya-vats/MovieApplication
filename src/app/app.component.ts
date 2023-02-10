import { Component, Injectable, Input, NgIterable, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ApiService } from './api.service';
export interface fact{
  data:string,
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'apiTestApp';
  constructor(private api: ApiService){
  }

  factdata:fact;


  myfunction() {
    this.api.getWeatherDetails().subscribe((res:fact)=>{
      console.log(res);
      this.factdata=res;
      // return this.weatherData
    })

   // console.log('function called')
  }

}
