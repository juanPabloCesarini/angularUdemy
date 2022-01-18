import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-citasMedicas';

  listCitas: any[] = [];

  agregarCita(cita: any) {
    this.listCitas.push(cita);
  }

  eliminarCitaList(index: number) {
    this.listCitas.splice(index, 1);
  }
}
