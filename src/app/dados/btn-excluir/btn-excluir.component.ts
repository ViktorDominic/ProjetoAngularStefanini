import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-excluir',
  templateUrl: './btn-excluir.component.html',
  styleUrls: ['./btn-excluir.component.css']
})
export class BtnExcluirComponent implements OnInit {

  @Input() estilo: String = '';
  @Input() texto: String = '';
  @Input() icone: String = '';
  @Input() nomeDados: String = '';
  @Input() indiceDados: number = 0;
  @Output() removeDadosEvent = new EventEmitter<Number>();

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirma() {
    this.modalRef?.hide();
    this.removeDadosEvent.emit(this.indiceDados);
  }

  cancela() {
    this.modalRef?.hide();
  }

}
