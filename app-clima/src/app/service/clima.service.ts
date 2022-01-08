import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key: string = 'f54ab2f29ffc837ff3de85efeefd498e';
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';


  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q='+ ciudad;
    return this.http.get(URL)
  }
}
