import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { IngresoGastosComponent } from './components/gastos/ingreso-gastos/ingreso-gastos.component';
import { ListadoGastosComponent } from './components/gastos/listado-gastos/listado-gastos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    PresupuestoComponent,
    IngresoGastosComponent,
    ListadoGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
