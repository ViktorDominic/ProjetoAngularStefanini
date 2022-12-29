import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DadosComponent } from './dados/dados.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnIncluirComponent } from './dados/btn-incluir/btn-incluir.component';
import { BtnEditarComponent } from './dados/btn-editar/btn-editar.component';
import { BtnExcluirComponent } from './dados/btn-excluir/btn-excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DadosComponent,
    BtnEditarComponent,
    BtnIncluirComponent,
    BtnExcluirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
