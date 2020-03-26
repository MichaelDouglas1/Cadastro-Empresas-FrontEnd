import { Component, OnInit, ViewChild } from "@angular/core";
import { EmpresasService } from "../empresas.service";
import { take, catchError } from "rxjs/operators";
import { Empresa } from "../empresa.model";
//import { BsModalRef } from 'ngx-bootstrap/modal';
//import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-empresa-listagem",
  templateUrl: "./empresa-listagem.component.html",
  styleUrls: ["./empresa-listagem.component.scss"]
})
export class EmpresaListagemComponent implements OnInit {
  empresas: Empresa[] = [];

  //deleteModalRef: BsModalRef;
  //@ViewChild('deleteModal', { static: true }) deleteModal: any;

  empresaSelecionada: Empresa;

  constructor(
    private empresaService: EmpresasService // private modalService: BsModalService) { }
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  onRefresh() {
    this.listar();
  }

  listar(): void {
    this.empresaService
      .listar()
      .pipe(take(1))
      .subscribe(dados => (this.empresas = dados));
  }

  onDelete(empresas: { id: any }) {
    this.empresaService
      .remove(empresas.id)
      .pipe(take(1))
      .subscribe(dados => this.listar());

    //this.empresaSelecionada = empresas;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  // onDeclineDelete() {
  //   this.deleteModalRef.hide();
  // }

  // onConfirmDelete() {

  //   this.empresaService.remove(this.empresaSelecionada.id)
  //   .subscribe();
  //   sucess => {
  //     this.deleteModalRef.hide();
  //   }
  // }
}
