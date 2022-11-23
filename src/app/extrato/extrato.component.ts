import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
})
export class ExtratoComponent {
  @Input() transferencias: any[];
}
