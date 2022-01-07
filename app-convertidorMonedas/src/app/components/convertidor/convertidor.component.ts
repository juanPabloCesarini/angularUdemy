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

}
