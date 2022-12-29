import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import Dados from '../dados.model';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './btn-editar.component.html',
  styleUrls: ['./btn-editar.component.css']
})
export class BtnEditarComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Input() icone: string = '';
  @Input() dados: Dados = new Dados();
  @Output() atualizaDadosEvent = new EventEmitter<Dados>();

  modalRef?: BsModalRef<any>;
  frmEdit: FormGroup = new FormGroup({});


  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.frmEdit = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      nomeMusica: [null],
    });
  }

  get f() {
    return this.frmEdit?.controls;
  }



  atualizaDados() {
    this.modalRef?.hide();
    const dados = this.frmEdit?.getRawValue() as Dados;
    this.atualizaDadosEvent.emit(dados);
  }

  abrirModal(template: TemplateRef<any>) {
    this.frmEdit?.patchValue(this.dados);
    this.modalRef = this.modalService.show(template);
  }

}
