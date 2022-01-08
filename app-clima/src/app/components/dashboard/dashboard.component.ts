import { Component, OnInit } from '@angular/core';
import { ClimaService } from './../../service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imgUrl: string = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad: string = '';
  temperatura: number = 0;
  humedad: number = 0;
  estado: string = '';
  query: boolean = false;
  loading: boolean = false;
  error: number = 0;

  constructor(private _climaService:ClimaService) { }

  ngOnInit(): void {
  }
  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.query = true;
      this.loading = false;
      this.humedad = data.main.humidity;
      this.temperatura = data.main.temp - 273;
      this.estado = data.weather[0].main;
    }, error =>{
      this.mje_error(error.error.cod);
    });
  }
  mje_error(e:number) {
    this.loading = false;
    this.error = e;
    setTimeout(() => {
      this.error = 0;
      this.ciudad = '';
    }, 3000);

  }
}
