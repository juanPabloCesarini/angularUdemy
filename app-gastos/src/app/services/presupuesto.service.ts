import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number;
  saldo: number;

  constructor() {
    this.presupuesto = 0;
    this.saldo = 0;
  }
}
