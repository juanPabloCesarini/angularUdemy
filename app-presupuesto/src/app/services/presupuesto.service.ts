import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  saldo: number;
  private gastos$ = new Subject<any>();

  constructor() { 
    this.presupuesto=0;
    this.saldo=0;
  }

  agregarGasto(gasto: any){
    this.saldo = this.saldo - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  getGastos():Observable<any>{
    return this.gastos$.asObservable();
  }
}
