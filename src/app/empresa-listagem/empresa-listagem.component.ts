import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../empresas.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-empresa-listagem',
  templateUrl: './empresa-listagem.component.html',
  styleUrls: ['./empresa-listagem.component.scss']
})
export class EmpresaListagemComponent implements OnInit {

  empresas: any[];
  
  constructor(private empresaService: EmpresasService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.empresaService.listar().pipe(take(1)).subscribe(dados => this.empresas = dados);
  }

}
