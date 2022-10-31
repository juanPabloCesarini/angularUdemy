import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {
  subscription: Subscription;
  presupuesto: number;
  saldo: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) { 
    this.presupuesto = 0;
    this.saldo = 0;

    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.saldo = this.saldo - data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.saldo = this._presupuestoService.saldo;
  }

    aplicarColorSaldo(){
      if (this.presupuesto / 4 > this.saldo){
        return 'alert alert-danger';
      }else{
        if (this.presupuesto / 2 > this.saldo){
          return 'alert alert-warning';
        }else{
          return 'alert alert-secondary';
        }
      }
    }
}
