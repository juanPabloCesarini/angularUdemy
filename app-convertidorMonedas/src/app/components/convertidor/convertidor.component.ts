import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad: number = 0;
  tengo: string = "u$s";
  quiero: string = "EUR";
  resultado: number = 0;
  monedas: string[] = ['u$s', 'EUR', '£'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void {
    switch (this.tengo) {
      case 'u$s':
        switch (this.quiero) {
          case 'u$s':
            this.resultado = this.cantidad;
            break;
          case 'EUR':
            this.resultado = this.cantidad * 0.88;
            break;
          case '£':
            this.resultado = this.cantidad * 0.74;
            break;
        }
        break;

      case 'EUR':
        switch (this.quiero) {
          case 'u$s':
            this.resultado = this.cantidad*1.14;
            break;
          case 'EUR':
            this.resultado = this.cantidad
            break;
          case '£':
            this.resultado = this.cantidad * 0.84
            break;
        }
        break;

      case '£':
         switch (this.quiero) {
           case 'u$s':
             this.resultado = this.cantidad * 1.36;
             break;
          case 'EUR':
             this.resultado = this.cantidad * 1.20;
            break;
           case '£':
             this.resultado = this.cantidad;
             break;
        }
        break;
    }
  }
}
