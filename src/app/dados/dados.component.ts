import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Dados from './dados.model';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  @Input() dados: Dados = new Dados();
  @Input() indiceDados: number = 0;
  @Output() notificaDadosExcluidoEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  atualizaDados(dados: Dados) {
    this.dados = dados;
  }

  removeDados(indice: any) {
    this.notificaDadosExcluidoEvent.emit(indice as number);
  }
}
