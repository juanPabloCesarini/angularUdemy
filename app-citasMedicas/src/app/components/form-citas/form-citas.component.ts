import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.css']
})
export class FormCitasComponent implements OnInit {
  nombre = " ";
  fecha = " ";
  hora = " ";
  sintomas = " ";
  formIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita() {
    if (this.nombre == ' ' || this.fecha == ' ' || this.hora == ' ' || this.sintomas == ' ') {
      this.formIncorrecto = true;
      return;
    }
    this.formIncorrecto = false;

    const CITA = {
      nombre:this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetForm();
  }
  resetForm() {
    this.nombre = " ";
    this.fecha = " ";
    this.hora = " ";
    this.sintomas = " ";
  }
}
