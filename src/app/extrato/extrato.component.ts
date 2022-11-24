import { TransferenciaService } from './../nova-transferencia/services/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
  }
}
