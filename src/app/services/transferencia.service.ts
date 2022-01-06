import { Injectable } from '@angular/core';

//Permite service ser injetado pelo construtor de outra classe, como em app.component.ts
@Injectable({
  //Serviço está provido enquanto aplicação estiver ativa. Assim não precisa declarar no app.module.ts
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
