import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CadastroTransferencia';
  transferencia: any;

  cadastrar($event) {
    console.log($event);
    this.transferencia = $event;
  }
}
