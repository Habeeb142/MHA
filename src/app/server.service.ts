import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: HttpClient) { }
public result
  search(location){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+location.place+'&units=metric&appid=f151caccc2e0d4a41a5ba796d52c9e0a');
  }
 
}
