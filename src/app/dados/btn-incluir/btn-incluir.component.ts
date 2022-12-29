import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Dados from '../dados.model';


@Component({
  selector: 'app-btn-incluir',
  templateUrl: './btn-incluir.component.html',
  styleUrls: ['./btn-incluir.component.css']
})
export class BtnIncluirComponent implements OnInit {

  @Input() estilo: string = '';
  @Input() texto: string = '';
  @Output() novoDadosEvent = new EventEmitter<Dados>();



  modalRef?: BsModalRef;
  frmNew: FormGroup = new FormGroup({});

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.frmNew = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      NomeMusica: [null],

    });
  }

  abrirModal(template: TemplateRef<any>) {
    this.frmNew.reset();
    this.modalRef = this.modalService.show(template);
  }

  salvar() {
    this.modalRef?.hide();
    const dados = this.frmNew.getRawValue() as Dados;
    this.novoDadosEvent.emit(dados);
  }


}
