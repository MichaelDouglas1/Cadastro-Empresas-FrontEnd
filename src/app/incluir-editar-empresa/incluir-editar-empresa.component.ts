import { HttpClientModule } from '@angular/common/http';
import { EmpresasService } from "./../empresas.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: "app-incluir-editar-empresa",
  templateUrl: "./incluir-editar-empresa.component.html",
  styleUrls: ["./incluir-editar-empresa.component.scss"]
})
export class IncluirEditarEmpresaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmpresasService,
    private location: Location,
    private http:  HttpClient,
    
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      contato: [null, [Validators.required]],
      email: [null, [Validators.required]],
      tipo_empresa: [null, [Validators.required]],
      razao_social: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      complemento: [null, []]
    });
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe();
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

  consultaCEP(cep) {


    cep = cep.replace(/\D/g, '');


    if (cep !== '') {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)

          .subscribe((data:any) => 
          { console.log(data); 
            this.form.get("estado").patchValue(data.uf);
            this.form.get("cidade").patchValue(data.localidade);
            this.form.get("bairro").patchValue(data.bairro);
            this.form.get("logradouro").patchValue(data.logradouro);
            this.form.get("complemento").patchValue(data.complemento);
          
          });
    }
  }


    
}
