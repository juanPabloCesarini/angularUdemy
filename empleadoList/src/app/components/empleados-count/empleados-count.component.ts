import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empleados-count',
  templateUrl: './empleados-count.component.html',
  styleUrls: ['./empleados-count.component.css']
})
export class EmpleadosCountComponent implements OnInit {

  radioButtonSelected: string = "todos";
  @Input() todos: number;
  @Input() femenino: number;
  @Input() masculino: number;
  @Output() radioButtonChange = new EventEmitter<string>();
  constructor() {
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
   }

  ngOnInit(): void {
  }

  radioChange(): void{
    this.radioButtonChange.emit(this.radioButtonSelected);
    
  }

}
