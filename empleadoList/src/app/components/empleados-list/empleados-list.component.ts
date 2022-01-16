import { Component, OnInit } from '@angular/core';
import { Empleados } from './../../models/Empleados';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {
  listEmpleados: Empleados[] = [

    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'masculino', salario: 23000 },
    { legajo: 2, nombre: 'Martina', apellido: 'Martinez', sexo: 'femenino', salario: 33000 },
    { legajo: 3, nombre: 'Pedro', apellido: 'Picapiedras', sexo: 'masculino', salario: 25000 },
    { legajo: 4, nombre: 'Laura', apellido: 'Fernandez', sexo: 'femenino', salario: 28000 },
    { legajo: 5, nombre: 'Juana', apellido: 'Perez', sexo: 'femenino', salario: 123000 }
  ];
  radioButtonSelected: string = "todos";

  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  getTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === "femenino").length;
  }

  sexoChange(radioButton:string): void{
    this.radioButtonSelected = radioButton;
  }

}
