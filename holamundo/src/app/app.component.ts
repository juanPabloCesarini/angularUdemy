import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holamundo';
  nombre = "Juan";
  textoPlaceholder = "Escribí tu nombre";
  deshabilitado = true;
  imgSrc = "https://cdn2.civitatis.com/argentina/mar-del-plata/galeria/big/lobos-marinos-mar-plata.jpg";

  constructor() {
    setInterval(() => this.nombre = 'Pablo', 3000);
    setInterval(() => this.deshabilitado = false, 3000);
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2;
  }
}
