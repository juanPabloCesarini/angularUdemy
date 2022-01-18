import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

const routes: Routes = [
  { path:'', redirectTo:'/alta_presupuesto', pathMatch: 'full'},
  { path: 'alta_presupuesto', component: PresupuestoComponent },
  { path: 'gastos', component: GastosComponent },
  { path: '**', redirectTo:'/alta_presupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
