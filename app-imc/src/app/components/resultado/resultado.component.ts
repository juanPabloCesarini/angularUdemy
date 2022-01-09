import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultado: number;
  imc: string = '';
  texto: string = '';

  constructor(route: ActivatedRoute) {
    this.resultado= +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado() {
    if (this.resultado >= 25) {
      this.imc = "Exceso de peso";
      this.texto = "Hacer dieta y gimnasia";
    } else if (this.resultado >= 18.5) {
      this.imc = "Peso normal";
      this.texto = "A no descuidarse!!";
    } else {
      this.imc = "Bajo peso";
      this.texto = "Tendrías que comer más";
    }
  }
}
