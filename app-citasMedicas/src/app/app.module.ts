import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCitasComponent } from './components/form-citas/form-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCitasComponent,
    ListCitasComponent
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
