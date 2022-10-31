import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto= false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {
  }

  agregarGasto(){

    if (this.cantidad > this._presupuestoService.saldo) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Importe ingresado mayor al saldo";
      return;
    }
    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Nombre del gasto o importe incorrecto"
    }else{

      // creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad

      }
      // enviamos el objeto a los suscriptores vía subject
      this._presupuestoService.agregarGasto(GASTO);
      // reseteamos el formulario
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
