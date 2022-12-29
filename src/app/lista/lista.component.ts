import { Component, Input, OnInit } from '@angular/core';
import Dados from '../dados/dados.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() dado: Dados[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  novoDados(dados: any) {
    this.dado.push(dados as Dados);
  }

  removeDados(indiceDados: any) {
    this.dado.splice(indiceDados as number, 1);
  }
}