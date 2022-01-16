import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosCountComponent } from './components/empleados-count/empleados-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    EmpleadosCountComponent
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
