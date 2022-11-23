import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
})
export class NovaTransferenciaComponent {
  transferir() {
    console.log('Solicitada Nova transferencia');
  }
}
