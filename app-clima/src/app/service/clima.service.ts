import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key: string = 'f54ab2f29ffc837ff3de85efeefd498e';
  url: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {

  }
  getClima(ciudad: string):Observable<any> {
    const URL = this.url + ciudad + '&appid=' + this.key;
    console.log(URL);
    return this.http.get(URL);
  }
}
