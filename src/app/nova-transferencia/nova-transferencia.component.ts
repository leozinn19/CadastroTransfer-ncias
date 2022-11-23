import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;

  destino: number;

  transferir(): void {
    console.log('Solicitada Nova transferencia');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
