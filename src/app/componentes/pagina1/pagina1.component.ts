import { Component } from '@angular/core';
import { Servicio1Service } from 'src/app/service/servicio1.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  router: any;
  constructor(
    private servicio : Servicio1Service
  ){}
    usuarios:any= [];
    mostraruser(){
      this.servicio.getuser().subscribe(persona=>this.usuarios=persona);
    }
}
