import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea: string = '';

  constructor() { }

  agregarTarea() {

    // Se crea el objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado : false,
    };

    // Se agrega en un array
    this.listTareas.push(tarea);

    // Se resetea el input
    this.nombreTarea = '';
  }

  eliminarTarea(i:number):void {
    this.listTareas.splice(i, 1);
  }

  actualizarTarea(tarea: Tarea, i: number): void{
    this.listTareas[i].estado = !tarea.estado;
  }
  ngOnInit(): void {
  }

}
