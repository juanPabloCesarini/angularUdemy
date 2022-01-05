import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  descripcion = "Esto es un video de event binding";
  title = 'holamundo';
  nombre = "Juan";
  textoPlaceholder = "Escribí tu nombre";
  deshabilitado = true;
  imgSrc = "https://cdn2.civitatis.com/argentina/mar-del-plata/galeria/big/lobos-marinos-mar-plata.jpg";
  twoWayBinding = "";
  listado: any[] = [
    {
      nombre: "Juan Pablo Cesarini", estado: "Aprobado"
    },
    {
      nombre: "Juan Pablo Romano", estado: "Aprobado"
    },
    {
      nombre: "Sebastián Grillo", estado: "Aprobado"
    }
  ]
  mostrar = true;

  constructor() {
    setInterval(() => this.nombre = 'Pablo', 3000);
    setInterval(() => this.deshabilitado = false, 3000);
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2;
  }
  cambiarDescripcion(): void{
    this.descripcion = "En en próximo video se verá two way binding";
  }
  toogle(): void{
    this.mostrar = !this.mostrar;
  }
}
