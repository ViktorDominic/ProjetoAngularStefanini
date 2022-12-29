import { Component, OnInit } from '@angular/core';
import Dados from './dados/dados.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  playlist = [
    {
      nome: 'Playlist MPB',
      descricao: 'Melhores MPB dos anos 90!',
      nomeMusica: 'Eu Sei Que Vou Te Amar — Tom Jobim ',
    },
    {
      nome: 'Para dormir',
      descricao: 'playlist de lo-fi',
      nomeMusica: 'sleep mimir',



    }
  ];


  dado: Dados[] = [];


  ngOnInit(): void {

    this.playlist.forEach((i)=> {
      let dados = new Dados();
      dados.nome = i.nome;
      dados.descricao = i.descricao;
      dados.nomeMusica = i.nomeMusica;
      this.dado.push(dados);
    });
  }


};



