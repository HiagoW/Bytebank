import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  //Não precisa mais, pois o service é usado direto no nova-transferencia para chamar o post http
  // transferir($event){
  //  this.service.adicionar($event);
  // }
}
